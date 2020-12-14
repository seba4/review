import * as moment from 'moment';
import { Question } from './question';
export class Campaign {
    constructor(data) {
        var _a;
        this.questions = [];
        Object.assign(this, data);
        this.createdAt = moment(data.createdAt);
        this.updatedAt = moment(data.updatedAt);
        if (data === null || data === void 0 ? void 0 : data.questions) {
            this.questions = (_a = data === null || data === void 0 ? void 0 : data.questions) === null || _a === void 0 ? void 0 : _a.map(questionParams => new Question(questionParams));
        }
    }
}
//# sourceMappingURL=campaign.js.map