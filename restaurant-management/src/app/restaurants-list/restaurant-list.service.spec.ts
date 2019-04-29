import { TestBed, inject } from '@angular/core/testing';

import { RestaurantListService } from './restaurant-list.service';

describe('RestaurantListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantListService]
    });
  });

  it('should be created', inject([RestaurantListService], (service: RestaurantListService) => {
    expect(service).toBeTruthy();
  }));
});
