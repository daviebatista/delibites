import { HttpClient } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { SingleRecipeService } from 'src/app/services/single-recipe/single-recipe.service';

@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.scss']
})
export class MainInformationComponent {
  public loading: boolean = true;
  public idMeal: number = 0;
  public food: any = {};

  @Output() idMealSimilar!: number;

  constructor(
    private service: SingleRecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRecipeId();
    this.takeRecipe(this.idMeal);
  }

  getRecipeId() { 
    this.route.queryParams.subscribe((queryParams: any) =>        {
      this.idMeal = queryParams['idMeal'];
      this.takeRecipe(this.idMeal);
    })
  }

  takeRecipe(idMeal: number) {
    this.service
      .takeRecipe(idMeal)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data: any) => {
        this.food = data;
      });
  }
}
