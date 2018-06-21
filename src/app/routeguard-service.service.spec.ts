import { TestBed, inject } from '@angular/core/testing';

import { RouteguardServiceService } from './routeguard-service.service';

describe('RouteguardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteguardServiceService]
    });
  });

  it('should be created', inject([RouteguardServiceService], (service: RouteguardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
