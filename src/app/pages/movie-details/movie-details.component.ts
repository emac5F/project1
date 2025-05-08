import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import Movie from '../../models/movie';

@Component({
  selector: 'app-movie-details',
  imports: [HeaderComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  // selectedMovie: Movie | undefined; 
  selectedMovie?: Movie;

  constructor(
    private route: ActivatedRoute, 
    private movieService: MovieService
  ){
    const movieName = route.snapshot.params['movieName'];
    console.log(movieName);
    this.selectedMovie = movieService.getMovie(movieName);
  }
}
