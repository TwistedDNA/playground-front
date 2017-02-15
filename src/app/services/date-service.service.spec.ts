/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DateServiceService } from './date-service.service';

describe('DateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateServiceService]
    });
  });

  it('should ...', inject([DateServiceService], (service: DateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
