import { Films } from './../interfaces/listfilms.interface';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FilmResult } from '../interfaces/listfilms.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Film } from '../interfaces/film.interface';

const base_url = environment.BASE_URL;
const API_KEY = '3c14946894de1a3e0cceecb0e39d757d';
@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private httpClient: HttpClient) {}
  getFilms(): Observable<FilmResult[]> {
    const url = 'movie/top_rated';
    const params = new HttpParams().set('api_key', API_KEY);
    return this.httpClient
      .get<Films>(`${base_url}${url}`, { params })
      .pipe(map(({ results }) => results));
  }
  getFilm(id: string): Observable<Film> {
    const url = 'movie/' + id;
    const params = new HttpParams().set('api_key', API_KEY);
    return this.httpClient.get<Film>(`${base_url}${url}`, { params });
  }
  getSearch(query: string): Observable<FilmResult[]> {
    const url = 'search/movie';
    const params = new HttpParams().set('api_key', API_KEY).set('query', query);
    return this.httpClient
      .get<Films>(`${base_url}${url}`, { params })
      .pipe(map(({ results }) => results));
  }
}
