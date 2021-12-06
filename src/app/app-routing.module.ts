import { CarparkOperationAdminLayoutComponent } from './shared/carpark-operation-admin-layout/carpark-operation-admin-layout.component';
import { HumanResourceManagementLayoutComponent } from './shared/human-resource-management-layout/human-resource-management-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: 'authentication', pathMatch:'full'},
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule) },
  {
    path: 'human-resource-management-layout', component: HumanResourceManagementLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./human-resource-management/human-resource-management.module').then((m) => m.HumanResourceManagementModule),
      },
    ],
  },
  {
    path: 'carpark-operation-admin-layout', component: CarparkOperationAdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./carpark-operation-admin/carpark-operation-admin.module').then((m) => m.CarparkOperationAdminModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
