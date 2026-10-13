import { Component, computed, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-introduction',
  imports: [MatButtonModule],
  templateUrl: './introduction.html',
})
export class Introduction {
	readonly i18n = inject(LocaleService);
	readonly resumePath = computed(() => this.i18n.locale() === 'en'
		? '/docs/Joao_Vitor_Oliveira_Resume_EN.pdf'
		: '/docs/Curriculo_Joao_Vitor_Oliveira_Atualizado.pdf');

	scrollToProjects(event: Event): void {
		event.preventDefault();
		document.getElementById('projetos')?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}
}
