import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from "./comments/comments.component"; // Import the UserComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommentsComponent],
  templateUrl: './app.component.html',
  // template: `<h1>Hola mudo desde {{city.toUpperCase()}} {{2+1}}</h1>
  //   <app-user></app-user><app-user/>`,

  styleUrl: './app.component.css'
  // styles: ``,
})
export class AppComponent {
  title = 'project1';
  city = 'Barcelona';
}
