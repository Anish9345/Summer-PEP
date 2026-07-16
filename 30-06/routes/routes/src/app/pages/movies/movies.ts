import { Component, inject, signal } from '@angular/core';
import { buttonConfig } from '../../utils/util';
import { Button } from '../../shared/button/button';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  imports: [Button],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  private http = inject(HttpClient);   //  http
  private movieServices = inject(MovieService);

  currPage = 0;
  movieApiLink = `https://rickandmortyapi.com/api/character/?page=${this.currPage}`;
  moviesArr = [];

  buttonConfig = buttonConfig;

  fetchMovies(pageNo: number): void{
    this.currPage = this.currPage + 1;
    this.movieServices.getNowPlaying(this.currPage).subscribe((data: any) => {
      data as any;
      this.moviesArr = (data?.results);
    })


    // const val = this.http.get(`https://rickandmortyapi.com/api/character/?page=${this.currPage}`);
    // val.subscribe((data) => {
    //   next: (data: any) => {
    //     const res = data as any;
    //     this.moviesArr.set(res?.results);
    //   };
    // });

    // console.log(val);


  }


  // fetchMovies(flag: boolean) {
  //   if(flag){this.currPage = this.currPage + 1;}
  //   else{
  //   this.currPage = this.currPage - 1;
  // }
  //   // this.currPage = Number;
  //   const movieApiLink = `https://rickandmortyapi.com/api/character/?page=${this.currPage}`;
  //   fetch(movieApiLink)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       this.moviesArr = data.results;
  //       // this.moviesArr = data.name;
  //       // console.log(data);
  //       // console.log(data.status);
  //       // console.log(this.moviesArr);
  //       console.log(this.moviesArr);
  //     });
  // }

  ngOnInit() {
    this.fetchMovies(0);
  }
}
