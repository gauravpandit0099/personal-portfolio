import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit, OnDestroy {
  activeIndex = 0;
  selectedProject: any = null;
  private sliderInterval?: ReturnType<typeof setInterval>;

  /* projects description */
  projects = [
    {
      number: '01',
      title: 'Quality Management System',
      shortTitle: 'QMS',
      category: 'Enterprise Platform',
      year: '',
      description: 'Multi-module enterprise platform for document control, change management and configurable approval workflows.',
      overview: 'Built a configurable enterprise platform to digitalize document control, change management and approval workflows, replacing manual paper-based processes with a structured digital system.',
      features: [
        'Designed backend architecture and database schema from scratch.',
        'Implemented granular RBAC with user-specific permissions.',
        'Added multi-admin and multi-tenant support.',
        'Built RESTful APIs with validation and role-based response filtering.',
        'Implemented job scheduling and background queue processing.',
        'Added chunked processing and Excel import/export for large datasets.',
        'Implemented digital approval and e-signature workflows.',
        'Built audit logging for create, update and status-change events.'
      ],
      technologies: [
        { name: 'Laravel', color: 'text-red-400' },
        { name: 'MySQL', color: 'text-amber-400' },
        { name: 'REST APIs', color: 'text-cyan-400' },
        { name: 'RBAC', color: 'text-violet-400' },
        { name: 'Queue Jobs', color: 'text-emerald-400' },
        { name: 'Excel', color: 'text-green-400' }
      ],
      visual: 'qms'
    },
    {
      number: '02',
      title: 'Low-Code Admin Console',
      shortTitle: 'LOW-CODE',
      category: 'Configuration Platform',
      year: '',
      description: 'Low-code platform allowing administrators to configure forms, validations, workflows and page layouts without changing application code.',
      overview: 'Built a configurable administration platform that allows non-technical administrators to create and manage application modules through configuration rather than application code.',
      features: [
        'Built a dynamic form generation engine on the backend.',
        'Created configuration-driven React interfaces.',
        'Implemented configurable fields and field validations.',
        'Added workflow and page-layout configuration.',
        'Built reusable metadata-driven REST APIs.',
        'Designed database support for dynamic fields.',
        'Implemented versioned form configurations.',
        'Stored validation rules as reusable configuration.'
      ],
      technologies: [
        { name: 'Laravel', color: 'text-red-400' },
        { name: 'React.js', color: 'text-sky-400' },
        { name: 'Inertia.js', color: 'text-pink-400' },
        { name: 'MySQL', color: 'text-amber-400' },
        { name: 'REST APIs', color: 'text-cyan-400' },
        { name: 'Postman', color: 'text-orange-400' }
      ],
      visual: 'lowcode'
    },
    {
      number: '03',
      title: 'Logistics & Transport',
      shortTitle: 'LOGISTICS',
      category: 'Business Platform',
      year: '',
      description: 'Transport management system covering consignments, vehicles, e-way bills and subscription billing.',
      overview: 'Built a full-stack Transport Management System supporting operational logistics workflows, customer management and subscription-based billing.',
      features: [
        'Built separate admin and customer-facing panels.',
        'Implemented Bilty management.',
        'Implemented Challan management.',
        'Built Vehicle Management functionality.',
        'Implemented E-Way Bill generation.',
        'Added PDF document generation.',
        'Integrated Razorpay for subscription plans.',
        'Implemented recurring billing and payment reconciliation.'
      ],
      technologies: [
        { name: 'Angular', color: 'text-violet-400' },
        { name: 'Razorpay', color: 'text-blue-400' },
        { name: 'API Integration', color: 'text-emerald-400' },
        { name: 'PDF', color: 'text-orange-400' }
      ],
      visual: 'logistics'
    },
    {
      number: '04',
      title: 'Reminder App',
      shortTitle: 'REMINDER',
      category: 'Mobile Application',
      year: '',
      description: 'Cross-platform reminder and task management application with scheduled and recurring notifications.',
      overview: 'Built a cross-platform reminder and task management application using React Native with a single codebase for iOS and Android.',
      features: [
        'Built cross-platform mobile application using React Native.',
        'Implemented reminder creation and editing.',
        'Implemented reminder completion and organization.',
        'Added local notification scheduling.',
        'Supported time-based reminders.',
        'Supported recurring reminders.',
        'Built CRUD flows for task management.',
        'Focused on simple and distraction-free task organization.'
      ],
      technologies: [
        { name: 'React Native', color: 'text-cyan-400' },
        { name: 'JavaScript', color: 'text-yellow-400' },
        { name: 'Notifications', color: 'text-emerald-400' },
        { name: 'Mobile UI', color: 'text-violet-400' }
      ],
      visual: 'reminder'
    }
  ];

  ngOnInit(): void {
    /* auto slide code */
    this.sliderInterval = setInterval(() => this.nextProject(), 5000);
  }

  ngOnDestroy(): void {
    /* stop slider */
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }

  nextProject(): void {
    this.activeIndex =
      this.activeIndex < this.projects.length - 1
        ? this.activeIndex + 1
        : 0;
  }

  previousProject(): void {
    this.activeIndex =
      this.activeIndex > 0
        ? this.activeIndex - 1
        : this.projects.length - 1;
  }

  selectProject(index: number): void {
    this.activeIndex = index;
  }

  openProject(project: any): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }
}