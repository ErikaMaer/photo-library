import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getPhotoUrl', () => {
    const result = service.getPhotoUrl(3);
    expect(result).toBe('https://picsum.photos/id/3/200');
  });
});
