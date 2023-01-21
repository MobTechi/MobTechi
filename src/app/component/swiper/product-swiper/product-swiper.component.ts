import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from 'src/app/constants/navigation-constants';
import { App } from 'src/app/model/app.model';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-product-swiper',
  templateUrl: './product-swiper.component.html',
  styleUrls: ['./product-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductSwiperComponent {

  @Input() apps: App[];

  @Input() isNavigationEnabled = true;
  @Input() isPaginationEnabled = true;

  public height = 100;
  public breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  };

  constructor(private router: Router) { }

  public openProduct(url) {
    this.router.navigate([URLS.apps + URLS.root + url])
  }
}
