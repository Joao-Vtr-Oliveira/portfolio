import {
	DestroyRef,
	Directive,
	ElementRef,
	afterNextRender,
	inject,
	input,
	numberAttribute,
} from '@angular/core';

const prefersReducedMotion = (): boolean =>
	typeof window.matchMedia === 'function' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const canHover = (): boolean =>
	typeof window.matchMedia === 'function' &&
	window.matchMedia('(hover: hover)').matches;

/**
 * Runs `onVisible` once the element enters the viewport. Falls back to running
 * immediately when IntersectionObserver is unavailable (tests, old browsers)
 * or the user prefers reduced motion.
 */
function whenVisible(
	el: Element,
	destroyRef: DestroyRef,
	onVisible: () => void,
	options: IntersectionObserverInit,
): void {
	if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
		onVisible();
		return;
	}
	const observer = new IntersectionObserver((entries) => {
		if (entries.some((entry) => entry.isIntersecting)) {
			onVisible();
			observer.disconnect();
		}
	}, options);
	observer.observe(el);
	destroyRef.onDestroy(() => observer.disconnect());
}

/** Fades and lifts the host in when it scrolls into view. Value is a delay in ms. */
@Directive({
	selector: '[appReveal]',
	host: {
		class: 'reveal',
		'[style.--d]': "appReveal() ? appReveal() + 'ms' : null",
	},
})
export class Reveal {
	readonly appReveal = input(0, { transform: (value: unknown) => numberAttribute(value, 0) });

	constructor() {
		const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
		const destroyRef = inject(DestroyRef);
		afterNextRender(() =>
			whenVisible(el, destroyRef, () => el.classList.add('is-in'), {
				rootMargin: '0px 0px -8% 0px',
				threshold: 0.08,
			}),
		);
	}
}

/** Radial glow that follows the pointer across the host card. */
@Directive({
	selector: '[appSpotlight]',
	host: { class: 'spot', '(pointermove)': 'track($event)' },
})
export class Spotlight {
	private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
	private frame: number | null = null;

	track(event: PointerEvent): void {
		if (this.frame !== null || prefersReducedMotion() || !canHover()) return;
		this.frame = requestAnimationFrame(() => {
			const rect = this.el.getBoundingClientRect();
			this.el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
			this.el.style.setProperty('--my', `${event.clientY - rect.top}px`);
			this.frame = null;
		});
	}
}

/** Pulls the host slightly towards the pointer. */
@Directive({
	selector: '[appMagnetic]',
	host: {
		class: 'magnetic',
		'(pointermove)': 'pull($event)',
		'(pointerleave)': 'release()',
	},
})
export class Magnetic {
	private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
	private frame: number | null = null;

	pull(event: PointerEvent): void {
		if (this.frame !== null || prefersReducedMotion() || !canHover()) return;
		this.frame = requestAnimationFrame(() => {
			const rect = this.el.getBoundingClientRect();
			const dx = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
			const dy = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
			this.el.style.setProperty('--tx', `${(dx * 10).toFixed(2)}px`);
			this.el.style.setProperty('--ty', `${(dy * 7).toFixed(2)}px`);
			this.frame = null;
		});
	}

	release(): void {
		this.el.style.setProperty('--tx', '0px');
		this.el.style.setProperty('--ty', '0px');
	}
}

/** Counts up to `appCountUp` the first time the host is visible. */
@Directive({ selector: '[appCountUp]' })
export class CountUp {
	readonly appCountUp = input.required<number>();
	readonly pad = input(0);

	constructor() {
		const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
		const destroyRef = inject(DestroyRef);
		afterNextRender(() => {
			const target = this.appCountUp();
			const format = (n: number) => String(n).padStart(this.pad(), '0');
			el.textContent = format(target);

			whenVisible(
				el,
				destroyRef,
				() => {
					if (prefersReducedMotion() || typeof requestAnimationFrame === 'undefined') return;
					const from = target > 1000 ? target - 48 : 0;
					const start = performance.now();
					const duration = 1150;
					const step = (now: number) => {
						const progress = Math.min((now - start) / duration, 1);
						const eased = 1 - Math.pow(1 - progress, 3);
						el.textContent = format(Math.round(from + (target - from) * eased));
						if (progress < 1) requestAnimationFrame(step);
					};
					requestAnimationFrame(step);
				},
				{ threshold: 0.6 },
			);
		});
	}
}

export const MOTION = [Reveal, Spotlight, Magnetic, CountUp] as const;
