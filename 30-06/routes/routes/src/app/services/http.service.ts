import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'https://rickandmortyapi.com/'; // https://api.themoviedb.org/movie
//   ApiKey = 'api/character/'; // 825866893c60ba5cbf0e6718bdd67310
  private http = inject(HttpClient);
  private header = new HttpHeaders({
    accept: 'application/json',
    Authorization: '',
  });

  get<T>(endpoint: string, params?: Record<string, string>): Observable<T> {
    const httpParams = new HttpParams({ fromObject: params || {} });

    return this.http.get<T>(`${this.baseUrl}${endpoint}`, {
        headers: this.header,
        params: httpParams,
    });
  }
}
