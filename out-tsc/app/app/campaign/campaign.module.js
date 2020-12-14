import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CampaignPageRoutingModule } from './campaign-routing.module';
import { CampaignPage } from './campaign.page';
import { QuestionComponent } from '../components/question/question.component';
import { QuestionInputsComponent } from '../components/question/question-inputs/question-inputs.component';
import { QuestionModule } from '../components/question/question.module';
let CampaignPageModule = class CampaignPageModule {
};
CampaignPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CampaignPageRoutingModule,
            ReactiveFormsModule,
            QuestionModule
        ],
        declarations: [CampaignPage, QuestionComponent, QuestionInputsComponent]
    })
], CampaignPageModule);
export { CampaignPageModule };
//# sourceMappingURL=campaign.module.js.map