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
      items: ['C# / ASP.NET', 'Angular', 'React', 'TypeScript', 'jQuery', 'JavaScript', 'HTML/CSS'],
    },
    {
      category: 'Backend',
      items: ['.NET Core', 'Node.js', 'Python', 'REST APIs', 'GraphQL', 'Microsoft SQL Server', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Tools',
      items: ['GitHub', 'Visual Studio Code', 'Codex', 'Cursor', 'Claude Code', 'Databricks', 'Azure Al services', 'AWS AI services'],
    },
  ];
}
