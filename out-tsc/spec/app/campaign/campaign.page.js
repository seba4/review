import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';
let CampaignPage = class CampaignPage {
    constructor(campaignStore, questionTypeStore) {
        this.campaignStore = campaignStore;
        this.questionTypeStore = questionTypeStore;
        this.questionSubj = new BehaviorSubject(null);
        this.answeredQuestions = [];
    }
    getQuestionType() {
        return this.questionTypes.find(type => type.questionTypeId === this.activeQuestion.questionTypeId);
    }
    ngOnInit() {
        forkJoin([this.questionTypeStore.loadTypes(), this.campaignStore.fetchCampaign()]).subscribe(([types, campaign]) => {
            this.campaign = campaign;
            this.activeQuestion = this.campaign.questions[0];
            this.questionTypes = types;
        });
        this.questionObs.subscribe(questionData => {
            if (questionData && this.activeQuestion === questionData.question) {
                const matchingAnswerIndex = this.answeredQuestions.findIndex(obj => obj.question === questionData.question);
                matchingAnswerIndex ? this.answeredQuestions[matchingAnswerIndex] = questionData : this.answeredQuestions.push(questionData);
                if (this.isLastQuestion(questionData.question)) {
                    this.submitCampaign();
                }
            }
        });
    }
    get questionObs() {
        return this.questionSubj.asObservable();
    }
    isLastQuestion(question) {
        return false;
    }
    submitCampaign() {
        const campaign = new CampaignSubmit({
            campaignId: this.campaign.campaignId,
            createdAt: this.campaign.createdAt,
            questions: this.answeredQuestions.map(answer => {
                return new CampaignQuestionAnswer({
                    questionId: answer.question.questionId,
                    answers: answer.selectedValues
                });
            })
        });
        this.campaignStore.submitCampaignAnswers(campaign).subscribe(res => {
            console.log('All answers were submited.');
        });
    }
};
CampaignPage = __decorate([
    Component({
        selector: 'app-campaign',
        templateUrl: './campaign.page.html',
        styleUrls: ['./campaign.page.scss'],
    })
], CampaignPage);
export { CampaignPage };
export class CampaignSubmit {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class CampaignQuestionAnswer {
    constructor(data) {
        Object.assign(this, data);
    }
}
//# sourceMappingURL=campaign.page.js.map