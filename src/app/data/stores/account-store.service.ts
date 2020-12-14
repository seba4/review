import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { BehaviorSubject } from 'rxjs';
import { Account } from '@schema/account';
import { AccountLocalStorageService, AccountService } from '@services/account.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountStoreService extends StoreService {
  accountSubject = new BehaviorSubject<Account>(null);
  account$ = this.accountSubject.asObservable();

  constructor(private apiService: AccountService, private storageService: AccountLocalStorageService) {
    super();
    this.fetchAccountFromLocalStorage().then();
    this.account$.pipe(distinctUntilChanged()).subscribe(account => {
      this.saveAccountToLocalStorage();
    });
  }

  get account(): Account {
    return this.accountSubject.getValue();
  }

  set account(account: Account) {
    this.accountSubject.next(account);
  }

  registerDevice(tempUsername: string, tempPassword: string) {
    this.apiService.registerDevice(tempUsername, tempPassword).subscribe(account => {
      this.account = account;
    });
  }

  async fetchAccountFromLocalStorage() {
    const account = await this.storageService.read();

    if (!this.account) {
      this.account = account;
    }
    return this.account;
  }

  async isConfigured(): Promise<boolean> {
    let account = this.account;
    if (!account) {
      account = await this.fetchAccountFromLocalStorage();

    }
    return account.isConfigured();
  }


  saveAccountToLocalStorage() {
    this.storageService.write(this.account).then();
  }

}
