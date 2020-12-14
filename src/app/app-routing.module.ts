import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IfConfiguredGuard } from '@guards/configuration.guard';

const routes: Routes = [
  {
    path: 'device-setup',
    pathMatch: 'full',
    loadChildren: () => import('./pages/device-setup/device-setup.module').then(m => m.DeviceSetupPageModule)
    // canLoad: [IfNotConfiguredGuard]
  },
  {
    path: 'campaign',
    loadChildren: () => import('./pages/campaign/campaign.module').then(m => m.CampaignPageModule),
    canLoad: [IfConfiguredGuard]
  },
  {
    path: '',
    redirectTo: 'campaign',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
