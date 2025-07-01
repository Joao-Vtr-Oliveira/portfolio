import { Component } from '@angular/core';
import { AboutMe } from "./about-me/about-me";
import { Introduction } from "./introduction/introduction";
import { Projects } from "./projects/projects";
import { Experiences } from "./experience/experience";
import { TechStackComponent } from "./tech-stack/tech-stack";

@Component({
  selector: 'app-home',
  imports: [AboutMe, Introduction, Projects, Experiences, TechStackComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
