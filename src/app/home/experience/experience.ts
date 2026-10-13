import { Component, computed, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { getExperiences } from './experience-info';
import {MatIconModule} from '@angular/material/icon';
import { LocaleService } from '../../services/locale.service';


@Component({
  selector: 'app-experience',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experiences {
	readonly i18n = inject(LocaleService);
	readonly experiences = computed(() => getExperiences(this.i18n.locale()));
}
