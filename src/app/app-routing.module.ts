import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IfConfiguredGuard, IfNotConfiguredGuard } from '@guards/configuration.guard';
import { EmptyPage } from './pages/empty-page/empty-page';

const routes: Routes = [
  {
    path: 'device-setup',
    pathMatch: 'full',
    loadChildren: () => import('./pages/device-setup/device-setup.module').then(m => m.DeviceSetupPageModule),
    canLoad: [IfNotConfiguredGuard]
  },
  {
    path: 'campaign',
    loadChildren: () => import('./pages/campaign/campaign.module').then(m => m.CampaignPageModule),
    canLoad: [IfConfiguredGuard]
  },
  {
    path: '',
    redirectTo: 'campaign',
    // loadChildren: () => import('./pages/empty-page/empty.page.module').then(m => m.EmptyPageModule)
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
