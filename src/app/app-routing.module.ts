import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/system-settings', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'system-settings',
    loadChildren: () => import('./modules/system-settings/system-settings.module').then(m => m.SystemSettingsModule)
  },
  {
    path:'not-found',
    component:NotFoundComponent
  },
  {
    path:'**',
    redirectTo:'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
