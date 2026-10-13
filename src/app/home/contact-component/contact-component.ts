import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-contact-component',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './contact-component.html',
})
export class ContactComponent {
	readonly i18n = inject(LocaleService);
}
