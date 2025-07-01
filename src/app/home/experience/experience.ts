import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { experiences } from './experience-info';


@Component({
  selector: 'app-experience',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experiences {
  experiences = signal(experiences);
}
