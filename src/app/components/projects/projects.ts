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
      title: 'AI Product Attribute Extractor',
      description: 'This AI Product Attribute Extractor transforms messy product descriptions into structured JSON using FastAPI and React. It features a dual-provider system (Azure OpenAI & Ollama), allowing electrical retailer to balance high-performance cloud reasoning with cost-effective local processing. Built with Docker and Pydantic, it ensures scalable, validated data for enterprise-grade retail catalogs.',
      thumbnail: 'project4.jpg',
      repo: 'https://github.com/kenyklam330/ai-product-attribute-extractor',
    },      
    {
      title: 'AeroView: London',
      description: 'AeroView: London is a web-based flight simulator by Ken Lam. Using the Google Maps API, players pilot an A380 over a 3D vector or satellite map of London. Control speed and direction with your keyboard, manage fuel, and enjoy the aerial views from a custom UI panel.',
      thumbnail: 'project3.jpg',
      link: 'https://kenyklam330.github.io/aero-view-london',
      repo: 'https://github.com/kenyklam330/aero-view-london',
    },        
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
      link: 'https://kenyklam330.github.io',
      repo: 'https://github.com/kenyklam330/kenyklam330.github.io',
    },
  ];
}
