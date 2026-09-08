import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  /* Career summary */
  stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Worked On' },
    { value: 'Full Stack', label: 'Primary Role' }
  ];

  /* Core technologies */
  technologies = [
    { name: 'PHP', color: 'text-blue-400' },
    { name: 'Laravel', color: 'text-red-400' },
    { name: 'Angular', color: 'text-violet-400' },
    { name: 'React.js', color: 'text-cyan-400' },
    { name: 'MySQL', color: 'text-amber-400' },
    { name: 'TypeScript', color: 'text-blue-400' },
    { name: 'REST APIs', color: 'text-emerald-400' },
    { name: 'React Native', color: 'text-cyan-300' }
  ];

  /* What I work on */
  capabilities = [
    {
      number: '01',
      title: 'Frontend Development',
      description:
        'Building responsive web interfaces and reusable components using Angular, React.js, TypeScript and JavaScript.'
    },
    {
      number: '02',
      title: 'Backend Development',
      description:
        'Developing Laravel applications, REST APIs, authentication, business logic and database-driven systems.'
    },
    {
      number: '03',
      title: 'Enterprise Systems',
      description:
        'Working on role-based applications, configurable workflows, multi-module platforms and business processes.'
    },
    {
      number: '04',
      title: 'Integration & Performance',
      description:
        'Integrating third-party APIs, payment services and background jobs while improving database and application performance.'
    }
  ];
}