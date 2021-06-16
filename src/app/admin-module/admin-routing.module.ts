import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: AdminNavigationComponent,
    children: [
      {
        path: 'shop',
        component: AdminSidebarComponent,
        children: [
          {
            path: 'dashboard',
            component: AdminDashboardComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
