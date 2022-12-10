import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NAVIGATIONS } from './data/navigation.data';
import { NavigationInterceptor } from './interceptor/navigation/navigation.interceptor';
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
        redirectTo: NAVIGATIONS.home.url,
        pathMatch: 'full'
      },
      {
        path: NAVIGATIONS.home.url,
        component: HomePageComponent,
        canActivate: [NavigationInterceptor],
      },
      {
        path: NAVIGATIONS.products.url,
        component: HomePageComponent,
        canActivate: [NavigationInterceptor],
      },
      {
        path: NAVIGATIONS.contactUs.url,
        component: HomePageComponent,
        canActivate: [NavigationInterceptor],
      },
      {
        path: NAVIGATIONS.products.url + '/' + ':product',
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
  { path: '**', redirectTo: NAVIGATIONS.home.url }
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
