import { Injectable, inject } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
    private apiService = inject(HttpService);

    getNowPlaying(pageNo : number = 1){
        return this.apiService.get('api/character', {
            page: pageNo.toString(),
            language: 'en-US',
            

        })
    }
}
