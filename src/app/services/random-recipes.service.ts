import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor (private http: HttpClient) {}

    listRandomFood (take: number)  {
      const key: string = ""
      const apiUrl = `GET https://api.spoonacular.com/recipes/random?apiKey=${key}&number=${take}`

      return this.http.get(apiUrl)
    }

}
