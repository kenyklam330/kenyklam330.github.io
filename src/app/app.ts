import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    About,
    Experience,
    Projects,
    Skills,
    Contact,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  /** Website title (browser tab text). Change this to update the tab title. */
  protected siteTitle = 'Ken Lam\'s Career Portfolio';

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle(this.siteTitle);
  }
}
