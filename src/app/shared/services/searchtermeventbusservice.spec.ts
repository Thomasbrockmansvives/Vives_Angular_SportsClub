import { TestBed } from '@angular/core/testing';

import { Searchtermeventbusservice } from './searchtermeventbusservice';

describe('Searchtermeventbusservice', () => {
  let service: Searchtermeventbusservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Searchtermeventbusservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
