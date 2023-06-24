import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {
  constructor(private http: HttpClient) {}

  listRandomFood() {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;

    return this.http.get(apiUrl);
  }
}
