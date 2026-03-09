import { Component } from '@angular/core';

export interface SkillGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      items: ['Vue 3', 'React', 'Angular', 'TypeScript', 'ASP.NET', 'jQuery', 'JavaScript', 'HTML/CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'C# / .NET Core', 'Python', 'REST APIs', 'Microsoft SQL Server', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Tools',
      items: ['GitHub', 'Visual Studio Code', 'Visual Studio', 'Databricks', 'Azure', 'AWS', 'Docker', 'Codex', 'Cursor', 'Claude Code'],
    },
  ];
}
