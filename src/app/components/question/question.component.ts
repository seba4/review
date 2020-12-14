import { Component, Input, OnInit } from '@angular/core';
import { Question } from '@schema/question';
import { BehaviorSubject } from 'rxjs';
import { QuestionWithAnswersI } from '@schema/question-answer';
import { QuestionType } from '@schema/question-type';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() type: QuestionType;
  @Input() questionSubj: BehaviorSubject<QuestionWithAnswersI>;

  constructor() {
  }

  ngOnInit() {
  }


  onSubmit(selectedValues: string[]) {

    const newObsValue: QuestionWithAnswersI = {
      question: this.question,
      selectedValues
    };

    this.questionSubj.next(newObsValue);
  }
}
