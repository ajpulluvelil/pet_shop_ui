import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'public-sit',
    loadChildren: () => import('./public-sit-module/public-sit.module').then(mod => mod.PublicSitModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login-module/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-module/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user-module/user.module').then(mod => mod.UserModule)
  },
  {
    path: '',
    redirectTo: 'public-sit',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
