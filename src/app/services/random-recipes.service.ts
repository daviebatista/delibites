import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor (private http: HttpClient) {}

    listRandomFood (take: number)  {
      const key: string = "844b90a391584f688d459a9a55f15933"
      const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=844b90a391584f688d459a9a55f15933&number=${take}`

      return this.http.get(apiUrl)
    }

}
