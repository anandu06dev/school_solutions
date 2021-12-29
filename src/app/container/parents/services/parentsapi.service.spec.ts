import { TestBed } from '@angular/core/testing';

import { ParentsapiService } from './parentsapi.service';

describe('ParentsapiService', () => {
  let service: ParentsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
