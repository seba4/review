import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { QuestionType } from '../schema/question-type';
import { BehaviorSubject } from 'rxjs';
import { QuestionTypeLocalStorageService, QuestionTypeService } from '@services/question-type.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeStoreService extends StoreService {
  typesSubject = new BehaviorSubject<QuestionType[]>([]);
  types$ = this.typesSubject.asObservable();

  constructor(private apiService: QuestionTypeService, private storageService: QuestionTypeLocalStorageService) {
    super();
    this.types$.subscribe(() => {
      this.storeTypesToLocalStorage();
    });
  }

  get types(): QuestionType[] {
    return this.typesSubject.getValue();
  }

  set types(types: QuestionType[]) {
    this.typesSubject.next(types);
  }

  fetchTypes() {
    return this.fetchTypesFromLocalStorage().finally(() => {
      this.fetchTypesFromAPI().then();
    });
  }

  async fetchTypesFromLocalStorage(): Promise<QuestionType[]> {
    const types = await this.storageService.read();

    if (this.types.length === 0) {
      this.types = types;
    }

    return types;
  }

  async fetchTypesFromAPI(): Promise<QuestionType[]> {
    const types = await this.apiService.loadTypes().toPromise();

    if (JSON.stringify(types) != JSON.stringify(this.types)) {
      this.types = types;
    }
    return types;
  }

  storeTypesToLocalStorage() {
    this.storageService.write(this.types).then();
  }

}
