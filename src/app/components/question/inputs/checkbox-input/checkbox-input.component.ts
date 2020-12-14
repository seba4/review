import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuestionOption } from '@schema/question-option';
import { Subscription } from 'rxjs';
import { CampaignStoreService } from '@stores/campaign-store.service';

@Component({
  selector: 'app-question-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent implements OnInit {
  @Output() inputSubmit = new EventEmitter<string[]>();
  @Input() inputOptions: QuestionOption[];
  form: FormGroup;
  subscriptions: Subscription = new Subscription();
  timer;
  inputTimeout = 2000;


  constructor(
    public formBuilder: FormBuilder, public campaignStore: CampaignStoreService) {
  }

  get optionsFromArray(): FormArray {
    return this.form.controls.options as FormArray;
  }

  ngOnInit() {
    this.inputTimeout = this.campaignStore.currentCampaignSettings.inputTimeout;

    this.form = this.formBuilder.group({
      options: new FormArray([])
    });
    this.addCheckboxes();

    const controls = (this.form as FormGroup).controls;
    controls.options.valueChanges.subscribe(val => {
      this.loadTimeout();
    });
  }

  loadTimeout(): void {
    clearTimeout(this.timer);
    this.timer = setTimeout(
      () => {
        this.submitForm();
        // Add timeout mark on page
      }, this.inputTimeout);
  }

  private submitForm() {
    const values = this.form?.value?.options.map((checked, i) => checked ? this.inputOptions[i]?.value : null).filter(v => v !== null);
    this.inputSubmit.emit(values || []);
  }

  private addCheckboxes(): void {
    this.inputOptions.forEach(() => {
      this.optionsFromArray.push(new FormControl(false));
    });
  }

}
