import { TestBed } from '@angular/core/testing';

import { MediaMatcherService } from './media-matcher.service';

describe('MediaMatcherService', () => {
  let service: MediaMatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaMatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
