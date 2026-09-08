import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  services = [
    {
      number: '01',
      title: 'Enterprise Web Development',
      description: 'Scalable business applications built around complex workflows, roles and operational requirements.',
      tags: ['Laravel', 'Angular', 'React.js'],
      icon: '⌘'
    },
    {
      number: '02',
      title: 'Backend & API Development',
      description: 'Reliable backend architecture and RESTful APIs with validation, security and structured data handling.',
      tags: ['PHP', 'Laravel', 'REST APIs'],
      icon: '</>'
    },
    {
      number: '03',
      title: 'Dynamic & Low-Code Systems',
      description: 'Configurable platforms where forms, fields, validations, workflows and layouts can be managed dynamically.',
      tags: ['Dynamic Forms', 'Workflows', 'RBAC'],
      icon: '◈'
    },
    {
      number: '04',
      title: 'Database & Performance',
      description: 'Well-structured databases, optimized queries and efficient processing for high-volume applications.',
      tags: ['MySQL', 'Optimization', 'Queues'],
      icon: '◉'
    },
    {
      number: '05',
      title: 'Payment Gateway & Logistics APIs Integration',
      description: 'Connecting applications with payment gateways, logistics services and external business APIs.',
      tags: ['Razorpay', 'Webhooks', 'APIs'],
      icon: '↗'
    },
    {
      number: '06',
      title: 'Mobile Application Development',
      description: 'Cross-platform mobile applications with reusable interfaces and reliable notification-driven workflows.',
      tags: ['React Native', 'iOS', 'Android'],
      icon: '⌁'
    }
  ];
}