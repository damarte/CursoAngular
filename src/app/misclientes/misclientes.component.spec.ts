import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisclientesComponent } from './misclientes.component';

describe('MisclientesComponent', () => {
  let component: MisclientesComponent;
  let fixture: ComponentFixture<MisclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
