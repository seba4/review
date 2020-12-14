import { TestBed } from '@angular/core/testing';
import { CampaignStoreService } from './campaign-store.service';
describe('CampaignStoreService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CampaignStoreService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=campaign-store.service.spec.js.map