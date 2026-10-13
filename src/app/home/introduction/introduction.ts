import { Component, DestroyRef, afterNextRender, computed, inject, signal } from '@angular/core';
import { LocaleService } from '../../services/locale.service';
import { getProjects } from '../projects/projects-info';
import { CountUp, Magnetic, Spotlight } from '../../shared/motion/motion';

const clockFormat = new Intl.DateTimeFormat('pt-BR', {
	hour: '2-digit',
	minute: '2-digit',
	timeZone: 'America/Sao_Paulo',
});

@Component({
	selector: 'app-introduction',
	imports: [CountUp, Magnetic, Spotlight],
	templateUrl: './introduction.html',
})
export class Introduction {
	readonly i18n = inject(LocaleService);
	readonly resumePath = computed(() => this.i18n.locale() === 'en'
		? '/docs/Joao_Vitor_Oliveira_Resume_EN.pdf'
		: '/docs/Curriculo_Joao_Vitor_Oliveira_Atualizado.pdf');

	readonly words = computed(() => this.i18n.t('hero.words').split('|'));
	private readonly wordIndex = signal(0);
	readonly word = computed(() => this.words()[this.wordIndex() % this.words().length]);

	readonly clock = signal(clockFormat.format(new Date()));

	/** Featured platform plus the standalone projects. */
	readonly stats = computed(() => [
		{ value: getProjects(this.i18n.locale()).length + 1, label: this.i18n.t('hero.stat.projects') },
		{ value: 3, label: this.i18n.t('hero.stat.products') },
		{ value: 3, label: this.i18n.t('hero.stat.langs') },
	]);

	constructor() {
		const destroyRef = inject(DestroyRef);
		afterNextRender(() => {
			const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
			const rotate = reduced ? null : setInterval(() => this.wordIndex.update((i) => i + 1), 2600);
			const tick = setInterval(() => this.clock.set(clockFormat.format(new Date())), 15_000);
			destroyRef.onDestroy(() => {
				if (rotate) clearInterval(rotate);
				clearInterval(tick);
			});
		});
	}

	scrollToProjects(event: Event): void {
		event.preventDefault();
		document.getElementById('projetos')?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}
}
