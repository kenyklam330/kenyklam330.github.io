import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  /** Your display name – change this */
  protected name = 'Ken (Yiu-Kei) Lam';

  /** Your photo: put the image in the `public` folder (e.g. public/photo.jpg) and set the filename here. Leave empty to hide. */
  protected photoUrl = 'photo.jpg';

  scrollToContact(e: Event): void {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToProjects(e: Event): void {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}
