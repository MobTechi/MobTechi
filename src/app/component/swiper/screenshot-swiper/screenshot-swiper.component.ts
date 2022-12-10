import { Component, Input, ViewEncapsulation } from '@angular/core';
import { redirectURL } from 'src/utils';
import { Image } from '../../../model/image.model';

@Component({
  selector: 'app-screenshot-swiper',
  templateUrl: './screenshot-swiper.component.html',
  styleUrls: ['./screenshot-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScreenshotSwiperComponent {

  @Input() screenshots: Image[] = [];

  public isNavigationEnabled = true;
  public isPaginationEnabled = true;

  public height = 200;
  public breakpoints = {
    768: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  };

  public openScreenshot(url: string) {
    const screenshotURL = url.replace('min/', '').replace('.min', '');
    redirectURL(screenshotURL, true);
  }
}
