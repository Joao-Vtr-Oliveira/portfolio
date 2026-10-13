import { Component, computed, inject } from '@angular/core';
import { getExperiences } from './experience-info';
import { LocaleService } from '../../services/locale.service';
import { Reveal, Spotlight } from '../../shared/motion/motion';

@Component({
  selector: 'app-experience',
  imports: [Reveal, Spotlight],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experiences {
	readonly i18n = inject(LocaleService);
	readonly experiences = computed(() =>
		getExperiences(this.i18n.locale()).map((experience) => ({
			...experience,
			paragraphs: experience.bio.split(/\n\s*\n/),
		})),
	);
}
