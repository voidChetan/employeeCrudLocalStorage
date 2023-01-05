import { TestBed } from '@angular/core/testing';

import { CommanService } from './comman.service';

describe('CommanService', () => {
  let service: CommanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
