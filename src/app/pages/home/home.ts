import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { Services } from './services/services';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    About,
    Skills,
    Experience,
    Projects,
    Services,
    Contact
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  /* Home page */
}