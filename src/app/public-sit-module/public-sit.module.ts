import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicSitRoutingModule } from './public-sit-routing.module';
import { PublicSitNavigationComponent } from './public-sit-navigation/public-sit-navigation.component';
import { PublicSitLandingPageComponent } from './public-sit-landing-page/public-sit-landing-page.component';


@NgModule({
  declarations: [
    PublicSitNavigationComponent,
    PublicSitLandingPageComponent
  ],
  imports: [
    CommonModule,
    PublicSitRoutingModule
  ]
})
export class PublicSitModule { }
