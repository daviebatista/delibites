import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { RandomRecipesService } from 'src/app/services/random-food/random-food.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent {
  public foods: any = []
  public loading: boolean = true
  public loadingMore: boolean = false

  constructor(private service: RandomRecipesService) {}

  ngOnInit(): void {
    this.getFoods();
}
  
getFoods() {
  for (let i = 0; i < 6; i++) {
    this.service.listRandomFood().subscribe((data: any) => {
    this.foods = this.foods.concat(data.meals);
    this.loading = false;
    });
  }
}
  
  loadMore() {
    for (let i = 0; i < 3; i++) {
      this.service.listRandomFood().subscribe((data: any) => {
      this.foods = this.foods.concat(data.meals);
      this.loading = false;
      });
    }
  }

}
