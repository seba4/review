import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { BehaviorSubject } from 'rxjs';
import { Campaign } from '../schema/campaign';
import { CampaignLocalStorageService, CampaignService } from '@services/campaign.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignStoreService extends StoreService {
  currentCampaignSubject = new BehaviorSubject<Campaign>(null);
  latestCampaignSettingsSubject = new BehaviorSubject<Campaign>(null);
  currentCampaignSettings$ = this.currentCampaignSubject.asObservable();
  latestCampaignSettings$ = this.latestCampaignSettingsSubject.asObservable();

  constructor(private apiService: CampaignService, private storageService: CampaignLocalStorageService) {
    super();
    this.latestCampaignSettings$.subscribe(campaign => {
      this.storeCampaignSettingsToLocalStorage();
    });
  }

  get currentCampaignSettings(): Campaign {
    return this.currentCampaignSubject.getValue();
  }

  set currentCampaignSettings(campaign: Campaign) {
    this.currentCampaignSubject.next(campaign);
  }

  get latestCampaignSettings(): Campaign {
    return this.latestCampaignSettingsSubject.getValue();
  }

  set latestCampaignSettings(campaign: Campaign) {
    this.latestCampaignSettingsSubject.next(campaign);
  }

  storeCampaignSettingsToLocalStorage() {
    this.storageService.writeCampaign(this.latestCampaignSettings);
  }


  /**
   * Updates current campaign settings with the latest loaded campaign Settings
   */
  syncCampaignSettings() {
    this.currentCampaignSettings = this.latestCampaignSettings;
  }

  fetchCampaign() {
    this.fetchCampaignFromLocalStorage().finally(() => {
      this.fetchCampaignFromAPI();
    });
  }

  async fetchCampaignFromLocalStorage(): Promise<void> {
    this.storageService.readCampaign().then(localSettings => {

        if (!(localSettings instanceof Campaign)) {
          return;
        }

        if (!this.currentCampaignSettings) {
          this.currentCampaignSettings = localSettings;
        }
        if (!this.latestCampaignSettings) {
          this.latestCampaignSettings = localSettings;
        }
      }
    );
  }

  fetchCampaignFromAPI() {
    this.apiService.readCampaignSettings().subscribe(apiSettings => {
        if (!(apiSettings instanceof Campaign)) {
          return;
        }

        if (!this.currentCampaignSettings) {
          this.currentCampaignSettings = apiSettings;
        }
        if (!this.latestCampaignSettings) {
          this.latestCampaignSettings = apiSettings;
        }
      }
    );
  }


}
