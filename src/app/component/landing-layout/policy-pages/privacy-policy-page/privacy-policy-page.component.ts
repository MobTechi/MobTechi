import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from 'src/app/model/app.model';
import { environment } from '../../../../../environments/environment';
import { URLS } from '../../../../constants/navigation-constants';
import { Location } from '@angular/common';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.scss']
})
export class PrivacyPolicyPageComponent implements OnInit {
  public product: App;
  public URLS = URLS;

  public environment = environment;

  constructor(
    private router: Router,
    private firebaseService: FirebaseService,
    private location: Location
  ) { }

  public async ngOnInit() {
    this.product = await this.firebaseService.getAppByUrl(this.router.url);
    if (!this.product) {
      this.product = {
        id: 'mobtechi',
        active: true,
        title: 'MobTechi',
        package: null,
        type: 'website',
        image: null
      }
    }
  }

  public back() {
    this.location.back();
  }
}
