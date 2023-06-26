import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarRecipeComponent } from './similar-recipe.component';

describe('SimilarRecipeComponent', () => {
  let component: SimilarRecipeComponent;
  let fixture: ComponentFixture<SimilarRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarRecipeComponent]
    });
    fixture = TestBed.createComponent(SimilarRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
