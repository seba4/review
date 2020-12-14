import { TestBed } from '@angular/core/testing';
import { CampaignService } from './campaign.service';
describe('CampaignService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CampaignService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=campaign.service.spec.js.map