import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '@schema/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) {
  }

  submitReview(answer: Review): Observable<any> {
    const url = `reviews`;
    return this.http.post(url, answer);
  }

}


@Injectable({
  providedIn: 'root'
})
export class ReviewLocalStorageService {
  constructor() {
  }

  /**
   * Reads an array of Reviews from local storage
   */
  async read(): Promise<Review[]> {
    const reviewJSON = await Plugins.Storage.get({ key: 'reviews' });
    return JSON.parse(reviewJSON.value).map(reviewObj => new Review(reviewObj));
  }

  /**
   * Writes an array of Reviews to local storage (CACHE)
   * @param data Reviews array which needs to be stored
   */
  async write(data: Review[]): Promise<any> {
    return await Plugins.Storage.set({ key: 'reviews', value: JSON.stringify(data) });
  }
}
