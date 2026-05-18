import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallButton } from './call-button';

describe('CallButton', () => {
  let component: CallButton;
  let fixture: ComponentFixture<CallButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallButton],
    }).compileComponents();

    fixture = TestBed.createComponent(CallButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
