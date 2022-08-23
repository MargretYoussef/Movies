import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }


  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=8ca7086260d6440956c15917b02b2ef1&language=en-US`)
  
  }

  getMoviesDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8ca7086260d6440956c15917b02b2ef1&query&language=en-US`)
  }


}
