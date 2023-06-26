import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(query: string)  {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=844b90a391584f688d459a9a55f15933&query=${query}&number=10`

    return this.http.get(apiUrl)
  }
}
