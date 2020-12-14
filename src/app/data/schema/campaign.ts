import * as moment from 'moment';
import { Question, QuestionI } from './question';


export interface CampaignI {
  organizationId: string;
  campaignId: string;
  title: string;
  formTimeout: number;
  succesfullSubmitTimeout: number;
  inputTimeout: number;
  createdAt: string;
  updatedAt: string;
  active: boolean;
  questions: QuestionI[];
}

export class Campaign {
  organizationId: string;
  campaignId: string;
  title: string;
  formTimeout: number;
  succesfullSubmitTimeout: number;
  inputTimeout: number;
  createdAt: moment.Moment;
  updatedAt: moment.Moment;
  active: boolean;
  questions: Question[] = [];

  constructor(data?: CampaignI) {
    Object.assign(this, data);

    this.createdAt = moment(data?.createdAt);
    this.updatedAt = moment(data?.updatedAt);

    if (data?.questions) {
      this.questions = data?.questions?.map(questionParams => new Question(questionParams));
    }
  }
}


