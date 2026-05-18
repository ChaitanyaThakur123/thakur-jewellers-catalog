import { TestBed } from '@angular/core/testing';

import { Jewelry } from './jewelry';

describe('Jewelry', () => {
  let service: Jewelry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jewelry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
