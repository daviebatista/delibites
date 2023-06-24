import { TestBed } from '@angular/core/testing';

import { RandomRecipesService } from './random-food.service';

describe('RandomFoodService', () => {
  let service: RandomRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
