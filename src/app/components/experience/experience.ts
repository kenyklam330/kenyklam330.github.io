import { Component } from '@angular/core';

export interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected jobs: Job[] = [
    {
      title: 'Assistant IT Manager - Software Development',
      company: 'Shaw Movie City Hong Kong Limited',
      period: '2021 – 2025',
      description: 'Created Facilities Rental System which is an online system for sound stages rental management for commercials and films production.',
    },
    {
      title: 'Senior Systems Analyst',
      company: 'HID Global CID Limited',
      period: '2017 – 2020',
      description: 'Designed and developed e-MRTD (Electronic Machine Readable Travel Documents) Quality Assurance System.',
    },
    {
      title: 'Systems Analyst',
      company: 'The Prudential Assurance Company Limited',
      period: '2013 – 2016',
      description: 'Collected user requirements and prepare software documentation.',
    },
    {
      title: 'Senior Analyst Programmer',
      company: 'China Construction Bank (Asia)',
      period: '2012 – 2013',
      description: 'Designed and developed Photo Credit Card System.',
    },
  ];
}
