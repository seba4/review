import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AccountStoreService } from '@stores/account-store.service';

/**
 * Guard which passes if Application is Already configured
 */
@Injectable({
  providedIn: 'root'
})
export class IfConfiguredGuard implements CanLoad {
  constructor(private router: Router) {
  }


  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.accountStore.isConfigured()) {
    //   return of(true);
    // } else {
    //   this.router.navigateByUrl('/device-setup').then();
    //   return of(false);
    // }

    // return this.accountStore.isConfigured();
    return true;
  }
}


/**
 * Guard which passes if Application is not Already configured
 */
@Injectable({
  providedIn: 'root'
})
export class IfNotConfiguredGuard implements CanLoad {
  constructor(private router: Router) {
  }


  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.accountStore.isConfigured()) {
    //   this.router.navigateByUrl('/campaign').then();
    //   return of(false);
    // } else {
    //   return of(true);
    // }
    return true;

  }
}
