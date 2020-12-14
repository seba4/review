import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { BehaviorSubject } from 'rxjs';
import { Review } from '@schema/review';
import { ReviewLocalStorageService, ReviewService } from '@services/review.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewStoreService extends StoreService {
  reviewsSubject = new BehaviorSubject<Review[]>([]);
  reviews$ = this.reviewsSubject.asObservable();

  constructor(private apiService: ReviewService, private storageService: ReviewLocalStorageService) {
    super();
    this.reviews$.subscribe(answers => {
      this.storeReviewsToLocalStorage().finally(() => {
        this.storeLastReviewToAPI();
      });
    });
    this.fetchReviewsFromLocalStorage();
  }

  get reviews(): Review[] {
    return this.reviewsSubject.getValue();
  }

  set reviews(reviews: Review[]) {
    this.reviewsSubject.next(reviews);
  }

  /**
   * Adds review to an existing array of reviews
   * @param review Review object which must be appended to array
   */
  addReview(review: Review): void {
    const reviewsClone = [...this.reviews];
    reviewsClone.push(review);
    this.reviews = reviewsClone;
  }

  /**
   * Removes Review from an existing array of reviews
   * @param reviewId reviewId based on which we filter.
   */
  removeReview(reviewId: string): void {
    this.reviews = this.reviews.filter(review => review.reviewId !== reviewId);
  }

  submitReview(review: Review): void {
    this.addReview(review);
  }

  async storeReviewsToLocalStorage(): Promise<void> {
    return await this.storageService.write(this.reviews);
  }

  storeLastReviewToAPI(): void {
    const review = this.reviews[this.reviews.length - 1];

    if (review instanceof Review) {
      this.apiService.submitReview(review).subscribe(() => {
        this.removeReview(review.reviewId);
      });
    }
  }

  fetchReviewsFromLocalStorage(): void {
    this.storageService.read().then(reviews => {
      this.reviews = reviews;
    });
  }


}
