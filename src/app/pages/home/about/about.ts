import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  /* work experience and projects */
  stats = [
    { value: '4', label: 'Years Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: '100%', label: 'Commitment' }
  ];

  /* technologies */
  technologies = [
    { name: 'PHP', color: 'text-blue-400' },
    { name: 'Laravel', color: 'text-red-400' },
    { name: 'Angular', color: 'text-violet-400' },
    { name: 'MySQL', color: 'text-amber-400' },
    { name: 'REST APIs', color: 'text-emerald-400' },
    { name: 'Microservices', color: 'text-fuchsia-400' },
    { name: 'TypeScript', color: 'text-cyan-400' },
    { name: 'Tailwind', color: 'text-teal-400' },
  ];

  /* quality section */
  qualities = [
    {
      number: '01',
      title: 'Clean Architecture',
      description: 'Building maintainable applications with structure that scales.'
    },
    {
      number: '02',
      title: 'User Focused',
      description: 'Turning complex requirements into simple digital experiences.'
    },
    {
      number: '03',
      title: 'Always Learning',
      description: 'Constantly exploring better tools, patterns and technologies.'
    }
  ];
}