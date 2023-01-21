import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { redirectURL } from 'src/utils';
import { URLS } from '../../../constants/navigation-constants';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss'],
})
export class ContactUsPageComponent {
  public URLS = URLS;
  public environment = environment;
  public websites = environment.social;

  public redirect(href: string) {
    redirectURL(href, true)
  }
}
