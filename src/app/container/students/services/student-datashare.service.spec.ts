import { TestBed } from '@angular/core/testing';

import { StudentDatashareService } from './student-datashare.service';

describe('StudentDatashareService', () => {
  let service: StudentDatashareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDatashareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
