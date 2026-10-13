import { Component, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';
import { Reveal, Spotlight } from '../../shared/motion/motion';

@Component({
  selector: 'app-about-me',
  imports: [Reveal, Spotlight],
  templateUrl: './about-me.html',
})
export class AboutMe {
	readonly i18n = inject(LocaleService);
	readonly pillars = [
		{ title: 'about.p1', text: 'about.primary', glyph: '◆' },
		{ title: 'about.p2', text: 'about.infra', glyph: '▲' },
		{ title: 'about.p3', text: 'about.note', glyph: '●' },
	];
}
