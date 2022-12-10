import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from 'src/app/data/products.data';
import { Product } from 'src/app/model/product.model';
import { environment } from '../../../../../environments/environment';
import { URLS } from '../../../../data/navigation.data';
import { Location } from '@angular/common';

@Component({
  selector: 'app-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.scss']
})
export class PrivacyPolicyPageComponent {
  public product: Product;
  public URLS = URLS;

  public environment = environment;

  constructor(
    public router: Router,
    private location: Location
  ) {
    this.product = PRODUCTS.find((product) => this.router.url.includes(product.url));
    if (!this.product) {
      this.product = {
        name: 'MobTechi',
        url: null,
        type: 'website',
        image: null
      }
    }
  }

  public back() {
    this.location.back();
  }
}
