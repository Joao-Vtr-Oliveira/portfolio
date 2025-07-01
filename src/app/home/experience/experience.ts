import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { experiences } from './experience-info';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-experience',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experiences {
  experiences = signal(experiences);
}
