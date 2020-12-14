import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.scss']
})
export class SimpleInputComponent implements OnInit {
  @Output() inputSubmit = new EventEmitter<string[]>();
  @Input() inputType: 'text' | 'number' = 'text';
  form: FormGroup;


  constructor(
    public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      value: [null, Validators.required]
    });
  }

  submitForm() {
    const selectedValues = [];
    const value = this.form?.controls?.value?.value;
    if (value != null) {
      selectedValues.push(value);
    }
    this.inputSubmit.emit(selectedValues);
  }

  isFormValid(): boolean {
    return this.form.valid;
  }

}
