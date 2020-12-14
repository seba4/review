import { Question } from '@schema/question';

export interface QuestionAnswerI {
    questionAnswerId?: string;
    questionId: string;
    value: string;
}

export class QuestionAnswer implements QuestionAnswerI  {
    questionAnswerId?: string;
    questionId: string;
    value: string;

    constructor(data?: QuestionAnswerI) {
        Object.assign(this, data);
    }
}

export interface QuestionWithAnswersI {
  question: Question;
  selectedValues: string[];
}
