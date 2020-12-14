import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionOption } from '@schema/question-option';
import { Subscription } from 'rxjs';
import { CampaignStoreService } from '@stores/campaign-store.service';

@Component({
  selector: 'app-question-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss']
})
export class RadioInputComponent implements OnInit {
  @Output() inputSubmit = new EventEmitter<string[]>();
  @Input() inputOptions: QuestionOption[];
  form: FormGroup;
  subscriptions: Subscription = new Subscription();
  timer;
  inputTimeout = 2000;


  constructor(
    public formBuilder: FormBuilder, public campaignStore: CampaignStoreService) {
  }

  ngOnInit() {
    this.inputTimeout = this.campaignStore.currentCampaignSettings.inputTimeout;
    this.form = this.formBuilder.group({
      options: null
    });

    const controls = (this.form as FormGroup).controls;
    controls.options.valueChanges.subscribe(val => {
      if (this.inputOptions.map(option => option.value).includes(val)) {
        this.submitForm();
      }
    });
  }

  submitForm() {
    if (!this.form.valid) {
      return true;
    }
    clearTimeout(this.timer);

    this.timer = setTimeout(
      () => {
        const selectedValues = [];
        const value = this.form?.controls?.options?.value;
        if (value != null) {
          selectedValues.push(value);
        }
        this.inputSubmit.emit(selectedValues);
      }, this.inputTimeout);
    return true;
  }

}
