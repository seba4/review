import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SimpleInputComponent } from './simple-input.component';
describe('TextInputComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SimpleInputComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SimpleInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=simple-input.component.spec.js.map