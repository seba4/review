
export interface QuestionOptionI {
    title: string;
    value: string | number;
}

export class QuestionOption implements QuestionOptionI {
    title: string;
    value: string | number;

    constructor(data?: QuestionOptionI) {
        Object.assign(this, data);
    }
}
