import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from 'src/app/model/app.model';
import { FirebaseService } from 'src/app/service/firebase.service';
import { redirectURL } from 'src/utils';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {

  public product: App;
  public productLineKey: string;

  // Play store url properties
  private readonly PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.mobtech.appName';

  constructor(
    public router: Router,
    private firebaseService: FirebaseService
  ) { }

  async ngOnInit(): Promise<void> {
    this.product = await this.firebaseService.getAppByUrl(this.router.url);
  }

  public openPlayStore(app: App) {
    const appURL = this.PLAY_STORE_URL.replace('appName', app.package);
    redirectURL(appURL, true);
  }
}
