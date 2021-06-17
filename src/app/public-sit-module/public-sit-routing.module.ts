import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicAboutUsComponent } from './public-about-us/public-about-us.component';
import { PublicContactUsComponent } from './public-contact-us/public-contact-us.component';
import { PublicServiceComponent } from './public-service/public-service.component';
import { PublicSitLandingPageComponent } from './public-sit-landing-page/public-sit-landing-page.component';
import { PublicSitNavigationComponent } from './public-sit-navigation/public-sit-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: PublicSitNavigationComponent,
    children: [
      {
        path: 'home',
        component: PublicSitLandingPageComponent
      },
      {
        path: 'services',
        component: PublicServiceComponent
      },
      {
        path: 'about-us',
        component: PublicAboutUsComponent
      },
      {
        path: 'contact-us',
        component: PublicContactUsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicSitRoutingModule { }
