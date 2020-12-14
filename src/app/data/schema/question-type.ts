export interface QuestionTypeI {
  questionTypeId: string;
  description: string;
}

export class QuestionType implements QuestionTypeI {
  questionTypeId: string;
  description: string;

  constructor(data?: QuestionTypeI) {
    Object.assign(this, data);
  }
}


export enum QuestionTypes {
  TEXT_INPUT = 'TEXT_INPUT',
  NUMBER_INPUT = 'NUMBER_INPUT',
  STAR_INPUT = 'STAR_INPUT',
  RANGE_INPUT = 'RANGE_INPUT',
  CHECK_BOX_INPUT = 'CHECK_BOX_INPUT',
  RADIO_INPUT = 'RADIO_INPUT'
}
