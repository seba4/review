import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { QuestionInputsComponent } from './question-inputs.component';
describe('QuestionInputsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuestionInputsComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(QuestionInputsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=question-inputs.component.spec.js.map