import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from 'src/app/data/products.data';
import { Product } from 'src/app/model/product.model';
import { redirectURL } from 'src/utils';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {

  public product: Product;
  public productLineKey: string;

  // Play store url properties
  private readonly PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.mobtech.appName';

  constructor(
    public router: Router
  ) {
    this.product = PRODUCTS.find((product) => this.router.url.includes(product.url));
  }

  public openPlayStore(appUrl: string) {
    const appURL = this.PLAY_STORE_URL.replace('appName', appUrl);
    redirectURL(appURL, true);
  }
}
