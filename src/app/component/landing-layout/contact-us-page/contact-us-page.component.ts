import { Component } from '@angular/core';
import { redirectURL } from 'src/utils';
import { URLS } from '../../../constants/navigation-constants';
import { CONFIG } from 'src/config';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss'],
})
export class ContactUsPageComponent {
  public URLS = URLS;
  public contactUs = CONFIG.contactUs;

  public redirect(href: string) {
    redirectURL(href, true)
  }
}