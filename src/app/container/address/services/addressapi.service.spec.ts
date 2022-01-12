import { TestBed } from '@angular/core/testing';

import { AddressapiService } from './addressapi.service';

describe('AddressapiService', () => {
  let service: AddressapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
