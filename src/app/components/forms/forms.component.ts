import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  // formularios reactivos
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;
  sentMsg = "";

  constructor(public movieService: MovieService) {
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', [Validators.required, Validators.max(300)]);
    this.director = new FormControl('');
    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director
    });
  }

  // metodo
  handleSubmit(): void {
    console.log('Movie created:', this.movieForm.value);
    this.movieService.addMovie(this.movieForm.value);
    this.movieForm.reset();
    this.sentMsg = "Enviado";
  }
}
