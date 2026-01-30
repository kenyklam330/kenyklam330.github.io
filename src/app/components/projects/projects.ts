import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  /** Thumbnail: put image in `public` folder (e.g. project1.jpg) or use a full URL. Leave empty for no image. */
  thumbnail?: string;
  link?: string;
  repo?: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected projects: Project[] = [
    {
      title: 'Python AI RAG Agent Demo',
      description: 'This is a Retrieval-Augmented Generation (RAG) application demo built to assist retail specialists in navigating complex product catalogs. It allows users to upload technical PDFs and receive accurate, context-aware answers.',
      thumbnail: 'project1.jpg',
      link: 'https://huggingface.co/spaces/kenyklam330/ai-rag-agent-demo',
      repo: 'https://github.com/kenyklam330/ai-rag-agent-demo',
    },
    {
      title: 'Career Portfolio Website',
      description: 'This is a career portfolio website built with Angular. It is a responsive website that displays my skills and experience.',
      thumbnail: 'project2.jpg',
      link: 'https://kenyklam330.github.io/',
      repo: 'https://github.com/kenyklam330/career-portfolio',
    },
  ];
}
