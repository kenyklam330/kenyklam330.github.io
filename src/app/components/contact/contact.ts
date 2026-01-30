import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  /** Your email address */
  protected email = 'kenyklam330@gmail.com';

  /** Your LinkedIn profile URL */
  protected linkedInUrl = 'https://linkedin.com/in/ken-yiu-kei-lam';

  /** Your GitHub profile URL */
  protected githubUrl = 'https://github.com/kenyklam330';
}
