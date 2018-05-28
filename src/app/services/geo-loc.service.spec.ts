import { TestBed, inject } from '@angular/core/testing';

import { GeoLocService } from './geo-loc.service';

describe('GeoLocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoLocService]
    });
  });

  it('should be created', inject([GeoLocService], (service: GeoLocService) => {
    expect(service).toBeTruthy();
  }));
});
