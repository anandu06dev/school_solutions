import { TestBed } from '@angular/core/testing';

import { FeesapiService } from './feesapi.service';

describe('FeesapiService', () => {
  let service: FeesapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeesapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
