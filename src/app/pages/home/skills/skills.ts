import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  /* skills listed here */
  skillGroups = [
    {
      number: '01',
      title: 'Frontend',
      description: 'Building responsive and intuitive interfaces.',
      icon: '</>',
      iconClass: 'text-violet-400 bg-violet-500/[0.08] border-violet-500/20',
      items: [
        { name: 'Angular', color: 'bg-violet-500' },
        { name: 'React.js', color: 'bg-cyan-400' },
        { name: 'React Native', color: 'bg-red-400' },
        { name: 'TypeScript', color: 'bg-blue-400' },
        { name: 'JavaScript', color: 'bg-yellow-400' },
        { name: 'HTML / CSS', color: 'bg-orange-400' },
        { name: 'Tailwind CSS', color: 'bg-cyan-400' }
      ]
    },

    /* backend skills */
    {
      number: '02',
      title: 'Backend & APIs',
      description: 'Designing scalable backend systems and APIs.',
      icon: '⌘',
      iconClass: 'text-red-400 bg-red-500/[0.08] border-red-500/20',
      items: [
        { name: 'PHP', color: 'bg-blue-400' },
        { name: 'Laravel', color: 'bg-red-400' },
        { name: 'REST APIs', color: 'bg-emerald-400' },
        { name: 'Microservices', color: 'bg-violet-400' },
        { name: 'JWT Authentication', color: 'bg-yellow-400' },
        { name: 'API Integration', color: 'bg-cyan-400' }
      ]
    },

    /* DB skills */
    {
      number: '03',
      title: 'Database & Architecture',
      description: 'Structuring reliable data and application architecture.',
      icon: '◉',
      iconClass: 'text-amber-400 bg-amber-500/[0.08] border-amber-500/20',
      items: [
        { name: 'MySQL', color: 'bg-yellow-400' },
        { name: 'Database Design', color: 'bg-blue-400' },
        { name: 'RBAC', color: 'bg-red-400' },
        { name: 'Queue Jobs', color: 'bg-emerald-400' },
      ]
    },

    /* tools skills */
    {
      number: '04',
      title: 'Tools & Practices',
      description: 'Tools that keep development structured and reliable.',
      icon: '⌁',
      iconClass: 'text-cyan-400 bg-cyan-500/[0.08] border-cyan-500/20',
      items: [
        { name: 'Git', color: 'bg-orange-400' },
        { name: 'GitHub', color: 'bg-neutral-300' },
        { name: 'Postman', color: 'bg-orange-400' },
        { name: 'Jira', color: 'bg-cyan-400' },
      ]
    }
  ];
}