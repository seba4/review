import { QuestionOption, QuestionOptionI } from './question-option';

export interface QuestionI {
    questionId?: string;
    title: string;
  questionTypeId: string;
    active: boolean;
    optional?: boolean;
    answerOptions: QuestionOptionI[];
}

export class Question {
    questionId?: string;
    title: string;
    questionTypeId: string;
    active: boolean;
    optional = false;
    answerOptions: QuestionOption[] = [];

    constructor(data?: QuestionI) {
        Object.assign(this, data);

        if (data?.answerOptions) {
          this.answerOptions = data?.answerOptions.map( optionParams => new QuestionOption(optionParams));
        }
    }
}



// Question:
// /**
//  *
//  * Question: What is your name:
//  * Clear text input
//  *
//  * Question: Your geneder:
//  * Radio Button: Male, Female, Other
//  *
//  * Question: How old are you:
//  * Number input: 16
//  *
//  * Question: Where are you from:
//  * Drop Down list: All options from the list
//  *
//  * Question: What do you prefer?
//  * Check box input
//  *
//  *
//  * - Clear text
//  * - Radio Button
//  * - Number input
//  * - email input
//  * - DropDown List
//  * - Check box
//  * - rating stars
//  * - meter
//  /


// // TEXT Input
// // Generating question
// const Question1Load = new Question({questionId: 'question1', title: 'What is your name?', active: true, answerTypeId: 'TextInput'});
//
// // Report printing
// const Question1 = new Question({questionId: 'question1', title: 'What is your name?', active: true, answerTypeId: 'TextInput'});
// const question1Answer1 = new QuestionAnswer({questionAnswerId: 'answer1', questionId: 'question1', value: 'Sebastjan Lajkovic'});
//
//
// // NUMBER Input
// // Generating question
// const Question2Load = new Question({questionId: 'question2', title: 'How old are you?', active: true, answerTypeId: 'NumberInput'});
//
// // Report printing
// const Question2Report = new Question({questionId: 'question2', title: 'How old are you?', active: true, answerTypeId: 'NumberInput'});
// const question2Answer1 = new QuestionAnswer({questionAnswerId: 'answer1', questionId: 'question2', value: '33'});
//
// // RADIO input
// // Generating question
// const Question3Load = new Question({questionId: 'question3', title: 'Your gender??', active: true, answerTypeId: 'RadioButton'});
// const question3Option1 = new QuestionOption({questionId: 'question3', title: 'Male', value: 'male'});
// const question3Option2 = new QuestionOption({questionId: 'question3', title: 'Female', value: 'female'});
// const question3Option3 = new QuestionOption({questionId: 'question3', title: 'Other', value: 'other'});
//
// // Report printing
// const Question3 = new Question({questionId: 'question3', title: 'Your gender??', active: true, answerTypeId: 'RadioButton'});
// const question3Answer1 = new QuestionAnswer({questionAnswerId: 'answer1', questionId: 'question3', value: 'male'});
// // Question3.addAnswers([question3Answer1, question3Answer2, question3Answer3]);
//
//
// // STARS input
// // Generating question
// const question4Load = new Question({questionId: 'question4', title: 'How would you rate our service?', active: true, answerTypeId: 'Stars'});
// const question4Option1 = new QuestionOption({questionId: 'question4', title: 'star', value: '1'});
// const question4Option2 = new QuestionOption({questionId: 'question4', title: 'star', value: '2'});
// const question4Option3 = new QuestionOption({questionId: 'question4', title: 'star', value: '3'});
// const question4Option4 = new QuestionOption({questionId: 'question4', title: 'star', value: '4'});
// const question4Option5 = new QuestionOption({questionId: 'question4', title: 'star', value: '5'});
//
// // Report printing
//
// const question4 = new Question({questionId: 'question4', title: 'How would you rate our service?', active: true, answerTypeId: 'Stars'});
// const question4Answer3 = new QuestionAnswer({questionAnswerId: 'answer3', questionId: 'question4', value: '3'});
//
// // Generating question
//
// // Report printing
// const question5 = new Question({questionId: 'question5', title: 'How would you rate our service?', active: true, answerTypeId: 'Barometer'});
// const question5Answer5 = new QuestionAnswer({questionAnswerId: 'answer5', questionId: 'question5', value: '5'});
//
//
// // Generating question
//
// // Report printing
// const question6 = new Question({questionId: 'question6', title: 'From which region are you?', active: true, answerTypeId: 'country_regions'});
// const question6Answer2 = new QuestionAnswer({questionAnswerId: 'answer2', questionId: 'question6', value: 'osrednja slovenija'});
//
//
