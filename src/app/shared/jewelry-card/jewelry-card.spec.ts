import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryCard } from './jewelry-card';

describe('JewelryCard', () => {
  let component: JewelryCard;
  let fixture: ComponentFixture<JewelryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelryCard],
    }).compileComponents();

    fixture = TestBed.createComponent(JewelryCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
