import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from '@schema/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  registerDevice(tempUsername: string, tempPassword: string): Observable<Account> {
    const url = 'devices/register';
    // return this.http.post<AccountI>(url, { username: tempUsername, password: tempPassword })
    return of({ organizationId: 'someOrganizationId', deviceId: 'someDeviceId', authenticationToken: 'someAuthenticationToken' }).pipe(
      map(account => new Account(account)));
  }


}


@Injectable({
  providedIn: 'root'
})
export class AccountLocalStorageService {
  constructor() {
  }

  /**
   * Reads Account information from local storage
   */
  async read(): Promise<Account> {
    const json = await Plugins.Storage.get({ key: 'account' });
    console.log('Reading Account', json);
    return new Account(JSON.parse(json.value));
  }

  /**
   * Writes an Account information to local storage (CACHE)
   * @param data Account object which needs to be stored
   */
  async write(data: Account): Promise<any> {
    console.log('Writing ACcount:', JSON.stringify(data));
    return await Plugins.Storage.set({ key: 'account', value: JSON.stringify(data) });
  }
}
