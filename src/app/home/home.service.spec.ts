import { TestBed, inject } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeService]
    });
  });

  it('should be defined', inject([HomeService], (service: HomeService) => {
    //expect(service).toBeTruthy();
    expect(service).toBeDefined();
  }));
});
