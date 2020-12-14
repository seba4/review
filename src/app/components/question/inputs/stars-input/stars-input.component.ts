import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionOption } from '@schema/question-option';
import { CampaignStoreService } from '@stores/campaign-store.service';

@Component({
  selector: 'app-question-stars-input',
  templateUrl: './stars-input.component.html',
  styleUrls: ['./stars-input.component.scss']
})
export class StarsInputComponent implements OnInit {
  @Output() inputSubmit = new EventEmitter<string[]>();
  @Input() inputOptions: QuestionOption[];
  selectedOptionIndex: number;
  timer;
  inputTimeout = 2000;


  constructor(public campaignStore: CampaignStoreService) {
  }

  ngOnInit() {
    this.inputTimeout = this.campaignStore.currentCampaignSettings.inputTimeout;
  }

  onIconClick(option: QuestionOption): boolean {
    if (!option) {
      return true;
    }

    clearTimeout(this.timer);
    this.selectedOptionIndex = this.inputOptions.findIndex(opt => opt === option);

    this.timer = setTimeout(
      () => {
        this.inputSubmit.emit([`${option.value}`]);
        // Add timeout mark on page
      }, this.inputTimeout);

    return true;
  }
}
