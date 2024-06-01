import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  public servicesList: Array<{
    title: string,
    image: string;
  }>;

  constructor() {
    this.servicesList = [
      {
        title: 'Web Application',
        image: 'assets/icons/web-application.avif'
      },
      {
        title: 'Mobile Application',
        image: 'assets/icons/mobile-application.avif'
      },
      {
        title: 'Data Storage and management',
        image: 'assets/icons/data-storage-management.avif'
      },
      {
        title: 'Cloud Services',
        image: 'assets/icons/cloud-services.avif'
      },
      {
        title: 'IT Consulting',
        image: 'assets/icons/it-consulting.jpeg'
      }
    ];
  }
}
