import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { QuestionType } from '@schema/question-type';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {

  constructor(public http: HttpClient) {
  }


  /**
   * Reads Question types from API
   */
  loadTypes(): Observable<QuestionType[]> {
    const url = `question-types`;
    // return this.http.get<QuestionType[]>(url);
    return of([
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
    ]).pipe(map(questionTypes => {
      return questionTypes.map(questionType => new QuestionType(questionType));
    }));
  }
}


@Injectable({
  providedIn: 'root'
})
export class QuestionTypeLocalStorageService {

  constructor() {
  }

  /**
   * Reads an array of Reviews from local storage
   */
  async read(): Promise<QuestionType[]> {
    const typesJSON = await Plugins.Storage.get({ key: 'question_types' });
    return JSON.parse(typesJSON.value).map(obj => new QuestionType(obj));
  }

  /**
   * Writes an array of QuestionTypes to local storage (CACHE)
   * @param data QuestionType array which needs to be stored
   */
  async write(data: QuestionType[]): Promise<any> {
    return await Plugins.Storage.set({ key: 'question_types', value: JSON.stringify(data) });
  }
}

