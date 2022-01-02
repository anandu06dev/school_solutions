import { TestBed } from '@angular/core/testing';

import { StudentdetailsResolver } from './studentdetails.resolver';

describe('StudentdetailsResolver', () => {
  let resolver: StudentdetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StudentdetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
