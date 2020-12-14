import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { StarsInputComponent } from './stars-input.component';


describe('StarsInputComponent', () => {
  let component: StarsInputComponent;
  let fixture: ComponentFixture<StarsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StarsInputComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
