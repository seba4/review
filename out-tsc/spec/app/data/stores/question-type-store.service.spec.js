import { TestBed } from '@angular/core/testing';
import { QuestionTypeStoreService } from './question-type-store.service';
describe('QuestionTypeStoreService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(QuestionTypeStoreService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=question-type-store.service.spec.js.map