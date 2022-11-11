import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Film } from '../interfaces/films.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor( private http: HttpClient) { }

  getFilms(): Observable<Film[]>{
    return this.http.get<Film[]>('http://localhost:3000/films')
  }

  getFilmId(id: string): Observable<Film> {
    return this.http.get<Film>(`http://localhost:3000/films/${id}`)
  }

  addFilms(film: Film) : Observable<Film> {
    return this.http.post<Film>('http://localhost:3000/films/', film);
  }

  updateFilms(film: Film) : Observable<Film> {
    return this.http.put<Film>(`http://localhost:3000/films/${film.id}`, film);
  }

  deleteFilms(id: string) : Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/films/${id}`);
  }


}
