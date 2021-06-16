import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicSitLandingPageComponent } from './public-sit-landing-page/public-sit-landing-page.component';
import { PublicSitNavigationComponent } from './public-sit-navigation/public-sit-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: PublicSitNavigationComponent,
    children: [
      {
        path: 'public-sit',
        component: PublicSitLandingPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicSitRoutingModule { }
