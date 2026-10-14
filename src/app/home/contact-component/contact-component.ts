import { Component, computed, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';
import { Icon } from '../../shared/icon/icon';
import { Magnetic, Reveal } from '../../shared/motion/motion';

@Component({
  selector: 'app-contact-component',
  imports: [Icon, Magnetic, Reveal],
  templateUrl: './contact-component.html',
})
export class ContactComponent {
	readonly i18n = inject(LocaleService);
	readonly year = new Date().getFullYear();
	readonly resumePath = computed(() => this.i18n.isEnglish()
		? '/docs/updated/Joao_Vitor_Oliveira_Resume_EN_ATS.pdf'
		: '/docs/updated/Curriculo_Joao_Vitor_Oliveira_ATS.pdf');

	toTop(): void {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
}
