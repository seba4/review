import * as moment from 'moment';
import { uuid4 } from '@capacitor/core/dist/esm/util';

export interface ReviewI {
  reviewId?: string;
  campaignId: string;
  createdAt: moment.Moment;
  questions: ReviewQuestionResponseI[];
}

export interface ReviewQuestionResponseI {
  questionId: string;
  answers: string[];
}


export class Review {
  reviewId?: string;
  campaignId: string;
  createdAt: moment.Moment;
  questions: ReviewQuestionResponse[];

  constructor(data?: ReviewI) {
    Object.assign(this, data);
    if (!this.reviewId) {
      this.reviewId = uuid4();
    }
    this.questions = data?.questions.map(questionData => new ReviewQuestionResponse(questionData));
  }
}

export class ReviewQuestionResponse implements ReviewQuestionResponseI {
  questionId: string;
  answers: string[];

  constructor(data: ReviewQuestionResponse) {
    Object.assign(this, data);
  }
}
