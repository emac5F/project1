import { Component, OnInit } from '@angular/core';
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
export class MovieDetailsComponent implements OnInit {
  // selectedMovie: Movie | undefined; 
  selectedMovie?: Movie;

  constructor(
    private route: ActivatedRoute, 
    private movieService: MovieService
  ){
    // esto ya no se usa porq se paso a ngOnInit
    // const movieName = route.snapshot.params['movieName'];
    // console.log(movieName);
    // this.selectedMovie = movieService.getMovie(movieName);
  }

  // trabajando con ngOnInit: aui se debe gestionar toda la logica, aporta estructura y orden(buenas practicas)
  // esto se va a ejecutar 1ro, antes q el constructor
  ngOnInit(): void {
    const movieName = this.route.snapshot.params['movieName'];
    this.selectedMovie
  }
}
