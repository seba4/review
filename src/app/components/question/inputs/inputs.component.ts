import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '@schema/question';
import { QuestionType, QuestionTypes } from '@schema/question-type';

@Component({
  selector: 'app-question-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  @Input() questionType: QuestionType;
  @Input() question: Question;
  @Output() inputSubmit = new EventEmitter<string[]>();
  questionTypes = QuestionTypes;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(selectedValues: string[]) {
    this.inputSubmit.emit(selectedValues);
  }

  isCorrectType(type: QuestionTypes): boolean {
    return this.questionType?.description === type;
  }

}
