import { Injectable } from '@angular/core';
import Movie from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[];

  constructor() { 
    this.movies = [
      {
        name: "Tierra de osos",
        duration: 300,
        director: "Aaron Blaise"
      },
      {
        name: "El rey león",
        duration: 120,
        director: "Roger Allers"
      },
      {
        name: "Orgullo y prejuicio",
        duration: 200,
        director: "Joe Wright"
      },
    ]
  }

  // metodo
  addMovie(movie: Movie) {
    this.movies.push(movie);
  }
}
