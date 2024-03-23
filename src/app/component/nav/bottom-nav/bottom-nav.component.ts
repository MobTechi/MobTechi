import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NAV_MENUS } from 'src/app/constants/helper-constants';

import { URLS } from '../../../constants/navigation-constants';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {
  public URLS = URLS;
  public navMenus = NAV_MENUS;
  public routerUrl: string;
  public loading = false;

  constructor(
    private router: Router
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.routerUrl = event.url;
    });
  }

  ngOnInit(): void { }

}
