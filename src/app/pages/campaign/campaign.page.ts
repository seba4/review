import { Component, OnInit } from '@angular/core';
import { Campaign } from '@schema/campaign';
import { CampaignStoreService } from '@stores/campaign-store.service';
import { Question } from '@schema/question';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { QuestionWithAnswersI } from '@schema/question-answer';
import { QuestionType } from '@schema/question-type';
import { QuestionTypeStoreService } from '@stores/question-type-store.service';
import { Review } from '@schema/review';
import { ReviewStoreService } from '@stores/review-store.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.page.html',
  styleUrls: ['./campaign.page.scss']
})
export class CampaignPage implements OnInit {
  campaign: Campaign;
  activeQuestion: Question;
  questionSubj: BehaviorSubject<QuestionWithAnswersI> = new BehaviorSubject<QuestionWithAnswersI>(null);
  answeredQuestions: QuestionWithAnswersI[] = [];
  questionTypes: QuestionType[];
  questionObs: Observable<QuestionWithAnswersI> = this.questionSubj.asObservable();
  successfulSubmitTimeout = 10000;

  constructor(
    private campaignStore: CampaignStoreService,
    private questionTypeStore: QuestionTypeStoreService,
    private  reviewStore: ReviewStoreService
  ) {
  }

  getQuestionType(): QuestionType {
    return this.questionTypes.find(type => type.questionTypeId === this.activeQuestion.questionTypeId);
  }

  ngOnInit() {
    // Fetch all Types and Fetch campaign
    // Fetch Types and then Fetch Campaign (Both must exist for us to continue)

    // First load all data from cache.
    // If exist then render it to user

    // next to it request for new API information to get latest data (don't notify user if data can't be gathered)
    // if campaign is not in progress then replace it with latest data
    // if in progress store campaign information asLatest. We will replace it when campaign is finished.

    forkJoin([this.questionTypeStore.fetchTypes(), this.campaignStore.fetchCampaign()]).subscribe( ([types, campaign]) => {
        this.campaign = this.campaignStore.currentCampaignSettings
        this.successfulSubmitTimeout = this.campaign?.succesfullSubmitTimeout;

    })


    this.campaignStore.currentCampaignSettings$.subscribe(campaign => {
      this.campaign = campaign;
      this.successfulSubmitTimeout = this.campaign?.succesfullSubmitTimeout;
      this.activeQuestion = this.campaign?.questions[0];
    });
    this.questionTypeStore.types$.subscribe(types => {
      this.questionTypes = types;
    });

    this.questionObs.subscribe(questionData => {
      if (questionData && this.activeQuestion === questionData.question) {
        this.storeToAnsweredQuestion(questionData);

        this.isLastQuestion(questionData.question) ? this.submitCampaign() : this.goToNextQuestion(questionData.question);
      }

    });

  }

  isQuestionareActive(): boolean {
    return this.questionTypes.length > 0 && !!this.activeQuestion;
  }

  goToNextQuestion(question: Question): void {
    const questions = this.campaign?.questions;

    if (!questions) {
      return;
    }

    const questionIndex = questions.findIndex(obj => obj === question);
    if (questions.length > questionIndex + 1) {
      this.activeQuestion = questions[questionIndex + 1];
    }
  }


  storeToAnsweredQuestion(questionData: QuestionWithAnswersI): void {
    const matchingAnswerIndex = this.answeredQuestions.findIndex(obj => obj.question === questionData.question);
    matchingAnswerIndex ? this.answeredQuestions[matchingAnswerIndex] = questionData : this.answeredQuestions.push(questionData);
  }

  isLastQuestion(question: Question): boolean {
    const questionIndex = this.campaign.questions.findIndex(campQuestion => campQuestion === question);
    return this.campaign.questions.length === questionIndex + 1;
  }

  submitCampaign(): void {
    this.activeQuestion = null;

    setTimeout(
      () => {
        this.resetCampaign();
        // Add timeout mark on page
      }, this.successfulSubmitTimeout);

    const review = new Review({
      campaignId: this.campaign.campaignId,
      createdAt: this.campaign.createdAt,
      questions: this.answeredQuestions.map(answer => {
          return { questionId: answer.question.questionId, answers: answer.selectedValues };
        }
      )
    });

    console.log(review);

    this.reviewStore.submitReview(review);
  }

  resetCampaign(): void {
    if (this.campaignStore.latestCampaignSettings !== this.campaignStore.currentCampaignSettings) {
      this.campaignStore.syncCampaignSettings();
    }

    this.activeQuestion = this.campaign.questions[0];
  }
}
