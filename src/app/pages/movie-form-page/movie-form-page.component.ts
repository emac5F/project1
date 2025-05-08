import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormsComponent } from '../../components/forms/forms.component';

@Component({
  selector: 'app-movie-form-page',
  imports: [HeaderComponent, FormsComponent],
  templateUrl: './movie-form-page.component.html',
  styleUrl: './movie-form-page.component.css'
})
export class MovieFormPageComponent {

}
