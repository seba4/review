import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { of } from 'rxjs';
import { Campaign } from '../schema/campaign';
import * as moment from 'moment';
let CampaignStoreService = class CampaignStoreService extends StoreService {
    constructor() {
        super();
    }
    submitCampaignAnswers(campaign) {
        campaign.submissionId = 'SomeGeneratedGUI';
        return of(campaign);
    }
    fetchCampaign() {
        const campaignData = {
            campaignId: 'b610ab9a-4b70-4f60-81d0-dbe87c205914',
            organizationId: 'c43d1bab-1e2a-4be2-844f-6fc04e4bc2cb',
            title: 'In store customer review',
            active: true,
            inputTimeout: 15,
            createdAt: moment().toISOString(),
            updatedAt: moment().toISOString(),
            questions: [
                {
                    questionId: 'afb50364-17ba-4b26-ba50-5d7c952c7656',
                    title: 'What is your name?',
                    active: true,
                    questionTypeId: '464fdee8-19f6-4c88-8f00-efb3ced95412',
                    answerOptions: []
                },
                {
                    questionId: '56c01e97-3713-4aa8-9420-a5b079657f1f',
                    title: 'How old are you?',
                    active: true,
                    questionTypeId: '8a831bec-84ec-4bac-996b-8e1dba473bcf',
                    answerOptions: []
                },
                {
                    questionId: 'af76d988-2dd5-4519-b9ac-21e83c6be8db',
                    title: 'Did you like our service?',
                    active: true,
                    questionTypeId: '84e55c65-b939-4eb7-a68b-a85dd2921b52',
                    answerOptions: [
                        { title: '1', value: '1' },
                        { title: '2', value: '2' },
                        { title: '3', value: '3' },
                        { title: '4', value: '4' }
                    ]
                },
                {
                    questionId: '8d7026e3-1b05-4e61-97db-615d0f59b83c',
                    title: 'Where are you from?',
                    active: true,
                    questionTypeId: '3d56d15d-8fb4-4446-ad5b-7ca56c806d08',
                    answerOptions: [
                        { title: 'Osrednja slovenija', value: 'Osrednja slovenija' },
                        { title: 'Primorska', value: 'Primorska' },
                        { title: 'Gorenjska', value: 'Gorenjska' },
                        { title: 'Dolenjska', value: 'Dolenjska' }
                    ]
                },
                {
                    questionId: '5bcd1eed-375c-4e88-95fd-d94265a3888a',
                    title: 'Your gender?',
                    active: true,
                    questionTypeId: 'e2448c16-1dc2-4973-b4ac-08f7ad2eb302',
                    answerOptions: [
                        { title: 'Male', value: 'Male' },
                        { title: 'Female', value: 'Female' },
                        { title: 'Other', value: 'Other' }
                    ]
                },
                {
                    questionId: 'b4b397e8-8df6-4a0f-92b5-152313d0c12e',
                    title: 'What is important for you?',
                    active: true,
                    questionTypeId: '5e4b2ebd-cbca-48a8-b9e5-0ff2bb5f2ed3',
                    answerOptions: [
                        { title: 'Cevlji', value: 'Cevlji' },
                        { title: 'Hlace', value: 'Hlace' },
                        { title: 'Srajce', value: 'Srajce' },
                        { title: 'Spodje perilo', value: 'Spodje perilo' }
                    ]
                }
            ]
        };
        return of(new Campaign(campaignData));
    }
};
CampaignStoreService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CampaignStoreService);
export { CampaignStoreService };
//# sourceMappingURL=campaign-store.service.js.map