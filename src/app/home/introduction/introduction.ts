import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-introduction',
  imports: [MatButtonModule],
  templateUrl: './introduction.html',
})
export class Introduction {
	readonly i18n = inject(LocaleService);

	scrollToProjects(event: Event): void {
		event.preventDefault();
		document.getElementById('projetos')?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}
}
