import { TestBed } from '@angular/core/testing';

import { SiblingFacadeService } from './sibling-facade.service';

describe('SiblingFacadeService', () => {
  let service: SiblingFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiblingFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
