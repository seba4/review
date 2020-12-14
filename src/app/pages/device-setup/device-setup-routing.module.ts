import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceSetupPage } from './device-setup.page';


const routes: Routes = [
  {
    path: '',
    component: DeviceSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceSetupPageRoutingModule {
}
