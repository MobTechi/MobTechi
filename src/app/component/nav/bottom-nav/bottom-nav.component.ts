import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { TOP_NAV_MENUS } from 'src/app/data/nav-menus.data';

import { URLS } from '../../../data/navigation.data';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {
  public URLS = URLS;
  public TOP_NAV_MENUS = TOP_NAV_MENUS;
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
