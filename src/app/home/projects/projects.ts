import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { projects } from './projects-info';
import {MatIconModule} from '@angular/material/icon';
import { Icon } from "../../shared/icon/icon";


@Component({
  selector: 'app-projects',
  imports: [MatButtonModule, MatCardModule, MatIconModule, Icon],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = signal(projects);
}
