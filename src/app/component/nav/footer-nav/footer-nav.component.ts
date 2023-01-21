import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from 'src/app/constants/navigation-constants';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent implements OnInit {

  private appsPackage = [];
  @Input() hideShadow = false;

  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) { }

  async ngOnInit(): Promise<void> {
    const appsList = await this.firebaseService.getApps();
    this.appsPackage = appsList.map((app) => app.package);
  }

  public routePrivacyPolicy() {
    const currentURL = this.router.url;
    const appPackage = currentURL.replace('/apps/', '');
    if (appPackage && this.appsPackage.includes(appPackage)) {
      this.router.navigate([appPackage + URLS.privacyPolicy])
    } else {
      this.router.navigate([URLS.privacyPolicy])
    }
  }
}
