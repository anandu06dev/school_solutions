import { TestBed } from '@angular/core/testing';

import { SiblingapiService } from './siblingapi.service';

describe('SiblingapiService', () => {
  let service: SiblingapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiblingapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
