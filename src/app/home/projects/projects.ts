import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { projects } from './projects-info';


@Component({
  selector: 'app-projects',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = signal(projects);
}
