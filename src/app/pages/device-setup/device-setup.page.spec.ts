import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceSetupPage } from './device-setup.page';

describe('DeviceSetupPage', () => {
  let component: DeviceSetupPage;
  let fixture: ComponentFixture<DeviceSetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceSetupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
