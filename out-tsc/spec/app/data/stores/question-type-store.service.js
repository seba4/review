import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { QuestionType } from '../schema/question-type';
import { of } from 'rxjs';
let QuestionTypeStoreService = class QuestionTypeStoreService extends StoreService {
    constructor() {
        super();
    }
    loadTypes() {
        const typesArr = [
            {
                questionTypeId: '464fdee8-19f6-4c88-8f00-efb3ced95412',
                description: 'TEXT_INPUT'
            },
            {
                questionTypeId: '8a831bec-84ec-4bac-996b-8e1dba473bcf',
                description: 'NUMBER_INPUT'
            },
            {
                questionTypeId: '84e55c65-b939-4eb7-a68b-a85dd2921b52',
                description: 'STAR_INPUT'
            },
            {
                questionTypeId: '9ac76f7f-2f53-4d5d-9498-e5a81957d2ba',
                description: 'RANGE_INPUT'
            },
            {
                questionTypeId: '5e4b2ebd-cbca-48a8-b9e5-0ff2bb5f2ed3',
                description: 'CHECK_BOX_INPUT'
            },
            {
                questionTypeId: 'e2448c16-1dc2-4973-b4ac-08f7ad2eb302',
                description: 'RADIO_INPUT'
            }
        ];
        return of(typesArr.map(type => new QuestionType(type)));
    }
};
QuestionTypeStoreService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], QuestionTypeStoreService);
export { QuestionTypeStoreService };
export var QuestionTypes;
(function (QuestionTypes) {
    QuestionTypes["TEXT_INPUT"] = "TEXT_INPUT";
    QuestionTypes["NUMBER_INPUT"] = "NUMBER_INPUT";
    QuestionTypes["STAR_INPUT"] = "STAR_INPUT";
    QuestionTypes["RANGE_INPUT"] = "RANGE_INPUT";
    QuestionTypes["CHECK_BOX_INPUT"] = "CHECK_BOX_INPUT";
    QuestionTypes["RADIO_INPUT"] = "RADIO_INPUT";
})(QuestionTypes || (QuestionTypes = {}));
//# sourceMappingURL=question-type-store.service.js.map