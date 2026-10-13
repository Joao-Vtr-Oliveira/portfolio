import { Component, DOCUMENT, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from '../shared/icon/icon';
import { LocaleService, PortfolioLocale } from '../services/locale.service';

interface NavItem {
	id: string;
	key: string;
}

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [Icon],
	templateUrl: './header.html',
	styleUrl: './header.css',
	host: {
		'[class.is-scrolled]': 'scrolled()',
		'[class.is-hidden]': 'hidden()',
		'[class.is-open]': 'menuOpen()',
		'(document:keydown.escape)': 'closeMenu()',
	},
})
export class Header {
	private readonly router = inject(Router);
	private readonly document = inject(DOCUMENT);
	readonly i18n = inject(LocaleService);

	readonly nav: NavItem[] = [
		{ id: 'sobre', key: 'nav.about' },
		{ id: 'experiencia', key: 'nav.experience' },
		{ id: 'projetos', key: 'nav.projects' },
		{ id: 'tecnologias', key: 'nav.stack' },
		{ id: 'contato', key: 'nav.contact' },
	];

	readonly scrolled = signal(false);
	readonly hidden = signal(false);
	readonly menuOpen = signal(false);
	readonly active = signal('home');
	readonly progress = signal(0);

	constructor() {
		const destroyRef = inject(DestroyRef);
		afterNextRender(() => {
			let lastY = window.scrollY;
			let frame: number | null = null;
			const onScroll = () => {
				if (frame !== null) return;
				frame = requestAnimationFrame(() => {
					const y = window.scrollY;
					const max = this.document.documentElement.scrollHeight - window.innerHeight;
					this.scrolled.set(y > 24);
					this.hidden.set(!this.menuOpen() && y > 480 && y > lastY + 4);
					if (y < lastY - 4 || y < 480) this.hidden.set(false);
					this.progress.set(max > 0 ? Math.min(y / max, 1) : 0);
					lastY = y;
					frame = null;
				});
			};
			window.addEventListener('scroll', onScroll, { passive: true });
			destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));

			if (typeof IntersectionObserver === 'undefined') return;
			const spy = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) this.active.set(entry.target.id);
					}
				},
				{ rootMargin: '-45% 0px -50% 0px' },
			);
			const observeSections = () => {
				spy.disconnect();
				for (const id of ['home', ...this.nav.map((item) => item.id)]) {
					const el = this.document.getElementById(id);
					if (el) spy.observe(el);
				}
			};
			observeSections();
			// Sections render after the route activates; observe again once they exist.
			setTimeout(observeSections, 400);
			destroyRef.onDestroy(() => spy.disconnect());
		});
	}

	goTo(route: string) {
		window.location.href = route;
	}

	scrollTo(targetId: string) {
		this.closeMenu();
		const onHome = ['/pt-BR', '/en'].includes(window.location.pathname);
		if (onHome) {
			const target = document.getElementById(targetId);
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		} else {
			// Redireciona para home com hash
			this.router.navigate([`/${this.i18n.locale()}`], { fragment: targetId });
		}
	}

	toggleMenu(): void {
		this.menuOpen.update((open) => !open);
		this.hidden.set(false);
		this.document.body.classList.toggle('is-locked', this.menuOpen());
	}

	closeMenu(): void {
		if (!this.menuOpen()) return;
		this.menuOpen.set(false);
		this.document.body.classList.remove('is-locked');
	}

	switchLocale(locale: PortfolioLocale): void {
		this.i18n.switch(locale, this.router);
	}
}
