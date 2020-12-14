import { TestBed } from '@angular/core/testing';
import { ReviewStoreService } from '@stores/review-store.service';

describe('ReviewStoreService', () => {
  let service: ReviewStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
