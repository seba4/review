import { __decorate } from "tslib";
import { Component, EventEmitter, Input } from '@angular/core';
import { QuestionTypes } from '@stores/question-type-store.service';
let QuestionInputsComponent = class QuestionInputsComponent {
    constructor() {
        this.submit = new EventEmitter();
        this.questionTypes = QuestionTypes;
    }
    ngOnInit() {
    }
    onSubmit(selectedValues) {
        this.submit.emit(selectedValues);
    }
    doesQuestionTypeMatch(type) {
        return this.questionType.description === type;
    }
};
__decorate([
    Input()
], QuestionInputsComponent.prototype, "submit", void 0);
__decorate([
    Input()
], QuestionInputsComponent.prototype, "questionType", void 0);
QuestionInputsComponent = __decorate([
    Component({
        selector: 'app-question-inputs',
        templateUrl: './question-inputs.component.html',
        styleUrls: ['./question-inputs.component.scss'],
    })
], QuestionInputsComponent);
export { QuestionInputsComponent };
//# sourceMappingURL=question-inputs.component.js.map