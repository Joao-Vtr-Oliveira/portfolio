import { Component } from '@angular/core';
import { AboutMe } from "./about-me/about-me";
import { Introduction } from "./introduction/introduction";
import { Projects } from "./projects/projects";

@Component({
  selector: 'app-home',
  imports: [AboutMe, Introduction, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
