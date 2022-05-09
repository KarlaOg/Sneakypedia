import { TestBed } from '@angular/core/testing';

import { SneakerService } from './sneaker.service';

describe('SneakerService', () => {
  let service: SneakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SneakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
