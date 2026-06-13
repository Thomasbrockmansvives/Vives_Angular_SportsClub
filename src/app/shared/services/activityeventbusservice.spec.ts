import { TestBed } from '@angular/core/testing';

import { Activityeventbusservice } from './activityeventbusservice';

describe('Activityeventbusservice', () => {
  let service: Activityeventbusservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Activityeventbusservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
