import { TestBed } from '@angular/core/testing';

import { Showonlybigeventbusservice } from './showonlybigeventbusservice';

describe('Showonlybigeventbusservice', () => {
  let service: Showonlybigeventbusservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Showonlybigeventbusservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
