import { TestBed } from '@angular/core/testing';

import { SiblingResolver } from './sibling.resolver';

describe('SiblingResolver', () => {
  let resolver: SiblingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SiblingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
