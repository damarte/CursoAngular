import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventillosComponent } from './eventillos.component';

describe('EventillosComponent', () => {
  let component: EventillosComponent;
  let fixture: ComponentFixture<EventillosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventillosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
