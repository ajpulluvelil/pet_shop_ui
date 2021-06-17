import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicSitRoutingModule } from './public-sit-routing.module';
import { PublicSitNavigationComponent } from './public-sit-navigation/public-sit-navigation.component';
import { PublicSitLandingPageComponent } from './public-sit-landing-page/public-sit-landing-page.component';
import { PublicServiceComponent } from './public-service/public-service.component';
import { PublicAboutUsComponent } from './public-about-us/public-about-us.component';
import { PublicContactUsComponent } from './public-contact-us/public-contact-us.component';


@NgModule({
  declarations: [
    PublicSitNavigationComponent,
    PublicSitLandingPageComponent,
    PublicServiceComponent,
    PublicAboutUsComponent,
    PublicContactUsComponent
  ],
  imports: [
    CommonModule,
    PublicSitRoutingModule
  ]
})
export class PublicSitModule { }
