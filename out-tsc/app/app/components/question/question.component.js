import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let QuestionComponent = class QuestionComponent {
    constructor() { }
    ngOnInit() {
    }
    onSubmit(selectedValues) {
        const newObsValue = {
            question: this.question,
            selectedValues
        };
        this.questionSubj.next(newObsValue);
    }
};
__decorate([
    Input()
], QuestionComponent.prototype, "question", void 0);
__decorate([
    Input()
], QuestionComponent.prototype, "type", void 0);
__decorate([
    Input()
], QuestionComponent.prototype, "questionSubj", void 0);
QuestionComponent = __decorate([
    Component({
        selector: 'app-question',
        templateUrl: './question.component.html',
        styleUrls: ['./question.component.scss'],
    })
], QuestionComponent);
export { QuestionComponent };
//# sourceMappingURL=question.component.js.map