// Angular module
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { ToastrModule } from 'ngx-toastr';
import { SwiperModule } from 'swiper/angular';

// open-template-hub module
import { ButtonModule } from '@open-template-hub/button';
import { CardModule } from '@open-template-hub/card';
import { HeroModule } from '@open-template-hub/hero';

// firebase module
import { firebaseConfig } from 'src/app/constants/firebase-constants';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

// App component module
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PolicyCardComponent } from './component/card/policy-card/policy-card.component';
import { PresentationCardComponent } from './component/card/presentation-card/presentation-card.component';
import { BottomNavComponent } from './component/nav/bottom-nav/bottom-nav.component';
import { FooterNavComponent } from './component/nav/footer-nav/footer-nav.component';
import { HeaderNavComponent } from './component/nav/header-nav/header-nav.component';
import { ProductSwiperComponent } from './component/swiper/product-swiper/product-swiper.component';
import { ScreenshotSwiperComponent } from './component/swiper/screenshot-swiper/screenshot-swiper.component';
import { ContactUsPageComponent } from './component/landing-layout/contact-us-page/contact-us-page.component';
import { HomePageComponent } from './component/landing-layout/home-page/home-page.component';
import { LandingLayoutComponent } from './component/landing-layout/landing-layout.component';
import { PrivacyPolicyPageComponent } from './component/landing-layout/policy-pages/privacy-policy-page/privacy-policy-page.component';
import { ProductPageComponent } from './component/landing-layout/product-page/product-page.component';
import { TitleComponent } from './component/UI/title/title.component';
import { ServicesComponent } from './component/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingLayoutComponent,
    HeaderNavComponent,
    BottomNavComponent,
    FooterNavComponent,
    PrivacyPolicyPageComponent,
    ProductPageComponent,
    ContactUsPageComponent,
    PolicyCardComponent,
    PresentationCardComponent,
    ProductSwiperComponent,
    ScreenshotSwiperComponent,
    TitleComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    BrowserModule,
    SwiperModule,
    CardModule,
    ButtonModule,
    HeroModule,
    ToastrModule.forRoot({ preventDuplicates: true }),
    MarkdownModule.forRoot({ loader: HttpClient }),
    // Initialize Firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
