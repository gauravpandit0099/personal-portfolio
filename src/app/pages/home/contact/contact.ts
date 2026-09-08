import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactDetails = [
    {
      label: 'Email',
      value: 'gaurav.pandit0399@gmail.com',
      href: 'mailto:gaurav.pandit0399@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/gaurav-pandit-7684bb290/'
    },
    {
      label: 'Phone',
      value: '+91 9575769452',
      href: 'tel:+919575769452'
    },
    {
      label: 'Location',
      value: 'Indore, India',
      href: '#'
    }
  ];

  socials = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gaurav-pandit-7684bb290/'
    },
    // {
    //   name: 'GitHub',
    //   href: '#'
    // }
  ];
}