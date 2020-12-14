import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let SimpleInputComponent = class SimpleInputComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submit = new EventEmitter();
        this.inputType = 'text';
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            value: null
        });
    }
    submitForm() {
        const selectedValues = [];
        this.submit.emit(selectedValues);
    }
};
__decorate([
    Output()
], SimpleInputComponent.prototype, "submit", void 0);
__decorate([
    Input()
], SimpleInputComponent.prototype, "inputType", void 0);
SimpleInputComponent = __decorate([
    Component({
        selector: 'app-question-text-input',
        templateUrl: './text-input.component.html',
        styleUrls: ['./text-input.component.scss'],
    })
], SimpleInputComponent);
export { SimpleInputComponent };
//# sourceMappingURL=simple-input.component.js.map