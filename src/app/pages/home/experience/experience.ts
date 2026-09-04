import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experiences = [
    {
      number: '01',
      role: 'Full Stack Developer',
      company: 'VidyaGxP Private Limited',
      location: 'Indore (M.P.), India',
      period: 'May 2024 — Present',
      type: 'Full Time',
      description:
        'Developing scalable web applications and business solutions using Angular and Laravel. Working across frontend interfaces, backend APIs, database architecture and application workflows.',
      technologies: [
        { name: 'Laravel', color: 'text-red-400' },
        { name: 'React.js', color: 'text-sky-400' },
        { name: 'MySQL', color: 'text-amber-400' },
        { name: 'REST APIs', color: 'text-emerald-400' },
        { name: 'Microservices', color: 'text-blue-400' },
        { name: 'Git', color: 'text-orange-400' },
        { name: 'Postman', color: 'text-yellow-300' },
        { name: 'Jira', color: 'text-indigo-400' }
      ]
    },
    {
      number: '02',
      role: 'Mobile Application and Web Developer',
      company: 'Devyani Technologies',
      location: 'Indore (M.P.), India',
      period: 'Sep 2022 — March 2024',
      type: 'Full Time',
      description:
        'Built responsive and interactive Angular applications while integrating REST APIs and developing reusable components for scalable frontend systems.',
      technologies: [
        { name: 'React Native', color: 'text-cyan-400' },
        { name: 'Angular', color: 'text-violet-400' },
        { name: 'TypeScript', color: 'text-blue-400' },
        { name: 'JavaScript', color: 'text-yellow-400' },
        { name: 'Git', color: 'text-orange-400' },
        { name: 'Postman', color: 'text-red-400' }
      ]
    }
  ];
}