import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { App } from 'src/app/model/app.model';
import { FirebaseService } from 'src/app/service/firebase.service';
import { URLS } from '../../../constants/navigation-constants';

enum elementId {
  home = 'home',
  apps = 'apps',
  contact = 'contact'
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent {

  public URLS = URLS;
  public apps: App[] = [];

  constructor(
    public router: Router,
    public firebaseService: FirebaseService
  ) {
    // fetch apps from firebase db
    this.fetchApps();
    // check the current route to call the scrollIntoView
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const routerUrl = event.url;
      if (routerUrl === URLS.home) {
        this.scrollIntoView(elementId.home);
      } else if (routerUrl === URLS.apps) {
        this.scrollIntoView(elementId.apps);
      } else if (routerUrl === URLS.contact) {
        this.scrollIntoView(elementId.contact);
      }
    });
  }

  private async fetchApps() {
    this.apps = await this.firebaseService.getApps();
  }

  public async scrollIntoView(id) {
    // give some time to load element then scroll
    // home route no need scroll
    if (id !== elementId.home) {
      const timeOut = 100;
      setTimeout(() => {
        const el = document.getElementById(id);
        el.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }, timeOut);
    }
  }
}
