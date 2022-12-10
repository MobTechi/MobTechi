import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from 'src/app/data/navigation.data';
import { PRODUCTS } from 'src/app/data/products.data';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent {

  private productNames = [];
  @Input() hideShadow = false;

  constructor(private router: Router) {
    this.productNames = PRODUCTS.map((product) => product.url);
  }

  public routePrivacyPolicy() {
    const currentURL = this.router.url;
    const productName = currentURL.replace('/products/', '');
    if (productName && this.productNames.includes(productName)) {
      this.router.navigate([productName + URLS.privacyPolicy])
    } else {
      this.router.navigate([URLS.privacyPolicy])
    }
  }
}
