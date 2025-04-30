import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from "./comments/comments.component"; // Import the UserComponent

import { HeaderComponent } from './components/header/header.component'; //trabajando con la carpeta de components
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommentsComponent, HeaderComponent, FormsModule], // Import the UserComponent here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

  // template: `<h1>Hola mudo desde {{city.toUpperCase()}} {{2+1}}</h1>
  //   <app-user></app-user><app-user/>`,
  // styles: ``,
})
export class AppComponent {
  title = 'project1';
  city = 'Barcelona';

  // components
  userName: string = 'Edith'; // Example user name
  
  number: number = 0; // Example number
  addOne() {
    this.number++; // Increment the number by 1
  }
}
