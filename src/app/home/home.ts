import { Component } from '@angular/core';
import { AboutMe } from "./about-me/about-me";

@Component({
  selector: 'app-home',
  imports: [AboutMe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
