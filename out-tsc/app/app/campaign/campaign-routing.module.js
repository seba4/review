import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CampaignPage } from './campaign.page';
const routes = [
    {
        path: '',
        component: CampaignPage
    }
];
let CampaignPageRoutingModule = class CampaignPageRoutingModule {
};
CampaignPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CampaignPageRoutingModule);
export { CampaignPageRoutingModule };
//# sourceMappingURL=campaign-routing.module.js.map