import { Component } from '@angular/core';
import { AboutMe } from "./about-me/about-me";
import { Introduction } from "./introduction/introduction";

@Component({
  selector: 'app-home',
  imports: [AboutMe, Introduction],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
