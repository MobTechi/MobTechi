import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { BRAND, NAV_MENUS } from 'src/app/constants/helper-constants';
import { URLS } from '../../../constants/navigation-constants';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {
  public loading = false;

  public URLS = URLS;
  public BRAND = BRAND;
  public TOP_NAV_MENUS = NAV_MENUS;
  public routerUrl = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.routerUrl = event.url === URLS.root ? URLS.home : event.url;
    });
  }
}
