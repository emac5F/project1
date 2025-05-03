import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from "./comments/comments.component"; // Import the UserComponent

import { HeaderComponent } from './components/header/header.component'; //trabajando con la carpeta de components
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "./components/child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommentsComponent, HeaderComponent, FormsModule, ChildComponent], // Import the UserComponent here
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

  // bloque @if
  condition: boolean = false; // Example condition
  condition2: string = ""; // Example condition
  // bloque @for
  movies: string[] = ['Avatar', 'Titanic', 'Star Wars', 'Harry Potter']; // Example array of movies
  animals: any = [
    {
        id: 1,
        name: 'Lion',
        img: 'https://i.pinimg.com/736x/3f/cd/05/3fcd05d393ff7bb7ed3279b32e82cfda.jpg',
    },
    {
        id: 2,
        name: 'Tiger',
        img: 'https://cdn.correodelsur.com/img/contents/images_980/2023/06/11/506081a6-3c15-4976-a902-f56ac084d681.jpg',
    },
    {
        id: 3,
        name: 'Elephant',
        img: 'https://content.nationalgeographic.com.es/medio/2024/05/14/elefante-africano-loxodonta-africana-bull-approaching-remote-camera-with-curiosity-maasai-mara-national-reserve-kenya_a6adb1d6_1589871_240514103416_800x800.jpg',
    },
    {
        id: 4,
        name: 'Giraffe',
        img: 'https://images.theconversation.com/files/611707/original/file-20240806-17-7xplt2.jpg?ixlib=rb-4.1.0&rect=226%2C130%2C6821%2C5130&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
    },
    {
        id: 5,
        name: 'Zebra',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Beautiful_Zebra_in_South_Africa.JPG/800px-Beautiful_Zebra_in_South_Africa.JPG',
    },
  ];

  // component child
  text: string = 'variable desde el padre!'; // Example text to pass to child component

  person: any = {
    sex: 'Mujer',
    age: 25
  }; // Example object to pass to child component
}




