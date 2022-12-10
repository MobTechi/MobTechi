import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { PRODUCTS } from 'src/app/data/products.data';
import { Product } from 'src/app/model/product.model';
import { BRAND } from '../../../data/brand.data';
import { URLS } from '../../../data/navigation.data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public brandLogoLoaded = false;

  public BRAND = BRAND;
  public URLS = URLS;

  public PRODUCTS: Product[] = PRODUCTS;

  constructor(public router: Router) { }

  public ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const routerUrl = event.url;
      if (routerUrl === URLS.home) {
        this.scrollIntoView('home');
      } else if (routerUrl === URLS.products) {
        this.scrollIntoView('products');
      } else if (routerUrl === URLS.contact) {
        this.scrollIntoView('contact-us');
      }
    });
  }

  public setBrandLogoLoaded = () => {
    this.brandLogoLoaded = true;
  };

  public scrollIntoView(id) {
    const el = document.getElementById(id);
    el.scrollIntoView();
  }
}
