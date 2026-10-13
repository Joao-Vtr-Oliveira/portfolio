import { Component, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
})
export class AboutMe {
	readonly i18n = inject(LocaleService);
}
