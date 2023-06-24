import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService { 
  constructor(private http: HttpClient) {} 
  takeRecipe(idMeal: number) {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
      return this.http.get(apiUrl).pipe(map((data: any) => data.meals[0]));
  } 
} 
