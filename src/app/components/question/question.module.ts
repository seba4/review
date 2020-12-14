import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleInputComponent } from './inputs/simple-input/simple-input.component';
import { InputsComponent } from './inputs/inputs.component';
import { QuestionComponent } from './question.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioInputComponent } from './inputs/radio-input/radio-input.component';
import { CheckboxInputComponent } from './inputs/checkbox-input/checkbox-input.component';
import { StarsInputComponent } from './inputs/stars-input/stars-input.component';


@NgModule({
  declarations: [
    SimpleInputComponent,
    InputsComponent,
    QuestionComponent,
    RadioInputComponent,
    CheckboxInputComponent,
    StarsInputComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SimpleInputComponent,
    InputsComponent,
    QuestionComponent,
    RadioInputComponent,
    CheckboxInputComponent,
    StarsInputComponent
  ]
})
export class QuestionModule {
}
