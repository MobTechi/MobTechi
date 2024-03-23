import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NAVIGATIONS } from './constants/navigation-constants';
import { NavigationInterceptor } from './service/navigation.interceptor';
import { HomePageComponent } from './component/landing-layout/home-page/home-page.component';
import { LandingLayoutComponent } from './component/landing-layout/landing-layout.component';
import { PrivacyPolicyPageComponent } from './component/landing-layout/policy-pages/privacy-policy-page/privacy-policy-page.component';
import { ProductPageComponent } from './component/landing-layout/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        canActivate: [NavigationInterceptor],
      },
      {
        path: NAVIGATIONS.services.url,
        component: HomePageComponent,
        canActivate: [NavigationInterceptor],
      },
      {
        path: NAVIGATIONS.apps.url,
        component: HomePageComponent,
        canActivate: [NavigationInterceptor],
      },
      {
        path: NAVIGATIONS.contactUs.url,
        component: HomePageComponent,
        canActivate: [NavigationInterceptor],
      },
      {
        path: NAVIGATIONS.apps.url + '/' + ':app',
        component: ProductPageComponent,
        canActivate: [NavigationInterceptor],
      },
      {
        path: NAVIGATIONS.privacyPolicy.url,
        component: PrivacyPolicyPageComponent,
        canActivate: [NavigationInterceptor],
      },
      {
        path: ':product' + '/' + NAVIGATIONS.privacyPolicy.url,
        component: PrivacyPolicyPageComponent,
        canActivate: [NavigationInterceptor],
      }
    ]
  },
  // otherwise, redirect to error
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
