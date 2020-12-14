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
      this.storeCampaignSettingsToCache();
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

  /**
   * Stores latest campaign information to Local Storage
   */
  storeCampaignSettingsToCache(): void {
    this.storageService.writeCampaign(this.latestCampaignSettings);
  }


  /**
   * Updates current campaign settings with the latest loaded campaign Settings
   */
  syncCampaignSettings(): void {
    this.currentCampaignSettings = this.latestCampaignSettings;
  }


  /**
   * Fetches Campaign data first from local Storage and then it gathers information from API.
   */
  fetchCampaign(): Promise<void> {
    return this.loadCampaignFromCache().finally(async () => await this.fetchCampaignFromAPI());
  }

  /**
   * Loads Cached Campaign information from LocalStorage
   */
  async loadCampaignFromCache(): Promise<void> {
    this.storageService.readCampaign().then(localSettings => {

        if (!(localSettings instanceof Campaign)) {
          return;
        }

        // If we don't have an active campaign yet we update it with gathered campaign information
        if (!this.currentCampaignSettings) {
          this.currentCampaignSettings = localSettings;
        }

        // If Latest campaign settings are not yet loaded  we update it with gathered campaign information
        if (!this.latestCampaignSettings) {
          this.latestCampaignSettings = localSettings;
        }
      }
    );
  }

  /**
   * Fetches Campaign information from API.
   */
  fetchCampaignFromAPI(): void {
    this.apiService.readCampaignSettings().subscribe(apiSettings => {
        if (!(apiSettings instanceof Campaign)) {
          return;
        }

        // If we don't have an active campaign yet we update it with API Campaign
        if (!this.currentCampaignSettings) {
          this.currentCampaignSettings = apiSettings;
        }

        // If we already have an active campaign then we update latestCampaign information with API campaign
        if (!this.latestCampaignSettings) {
          this.latestCampaignSettings = apiSettings;
        }
      }
    );
  }


}
