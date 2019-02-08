import { TestBed } from '@angular/core/testing';

import { ForTestService } from './for-test.service';

describe('ForTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForTestService = TestBed.get(ForTestService);
    expect(service).toBeTruthy();
  });
});
