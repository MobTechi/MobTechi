import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NAVIGATIONS } from 'src/app/constants/navigation-constants';
import { SeoMetaData } from 'src/app/model/seo.model';
import { SeoService } from 'src/app/service/seo.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationInterceptor  {
  constructor(private seoService: SeoService) {
  }

  public canActivate(
    _next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const navObj = this.getObjectByUrl(state.url);
    if (navObj && navObj.title) {
      const seoMetaData = {
        title: navObj.title,
        description: navObj.description,
        keywords: navObj.keywords,
        robots: navObj.keywords,
      } as SeoMetaData;
      this.seoService.setMetaData(seoMetaData);
    }

    return true;
  }

  public getObjectByUrl = (url: string) => {
    const moduleName = url.substring(url.lastIndexOf('/') + 1);
    const key = Object.keys(NAVIGATIONS).find(
      (k: string) => NAVIGATIONS[k].url === moduleName
    );
    return NAVIGATIONS[key];
  };
}
