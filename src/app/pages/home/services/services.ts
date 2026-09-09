import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = [
    {
      number: '01',
      title: 'Enterprise Web Development',
      description:
        'Building business applications with multiple modules, user roles, workflows and operational features using Laravel, Angular and React.js.',
      tags: ['Laravel', 'Angular', 'React.js'],
      icon: '⌘',
    },
    {
      number: '02',
      title: 'Backend & API Development',
      description:
        'Developing Laravel backends and REST APIs with authentication, validation, business logic, database integration and structured responses.',
      tags: ['PHP', 'Laravel', 'REST APIs'],
      icon: '</>',
    },
    {
      number: '03',
      title: 'Low-Code Systems',
      description:
        'Creating configurable systems where administrators can manage forms, fields, validations, workflows and layouts without changing application code.',
      tags: ['Dynamic Forms', 'Workflows', 'RBAC'],
      icon: '◈',
    },
    {
      number: '04',
      title: 'Database & Performance',
      description:
        'Designing structured MySQL databases and improving queries, background processing and application workflows for better performance.',
      tags: ['MySQL', 'Optimization', 'Queues'],
      icon: '◉',
    },
    {
      number: '05',
      title: 'Payment & API Integration',
      description:
        'Integrating payment gateways, logistics services, webhooks and third-party APIs into business applications and backend workflows.',
      tags: ['Razorpay', 'Webhooks', 'APIs'],
      icon: '↗',
    },
    {
      number: '06',
      title: 'Mobile Application',
      description:
        'Developing cross-platform mobile applications with React Native, reusable interfaces, API integration and notification-based workflows.',
      tags: ['React Native', 'iOS', 'Android'],
      icon: '⌁',
    },
  ];
}
