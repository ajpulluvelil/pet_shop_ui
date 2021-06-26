import { TestBed } from '@angular/core/testing';

import { PetShopApiService } from './pet-shop-api.service';

describe('PetShopApiService', () => {
  let service: PetShopApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetShopApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
