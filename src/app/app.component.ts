import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from "./comments/comments.component"; // Import the UserComponent

//trabajando con la carpeta de components
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "./components/child/child.component";
import Product from './models/product';
import { FormsComponent } from "./components/forms/forms.component";
import { Child1Component } from "./components/child1/child1.component";
import { Child2Component } from "./components/child2/child2.component";
import { Child0Component } from "./components/child0/child0.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, RouterOutlet, UserComponent, CommentsComponent, FormsModule, ChildComponent, FormsComponent, Child1Component, Child2Component, Child0Component], // Import the UserComponent here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

  // template: `<h1>Hola mudo desde {{city.toUpperCase()}} {{2+1}}</h1>
  //   <app-user></app-user><app-user/>`,
  // styles: ``,
})
export class AppComponent {

  isDark: boolean = true;

  toggleDark(){
    this.isDark = !this.isDark;  
  }

  title = 'project1';
  city = 'Barcelona';

  // components
  userName: string;
  myNumber: number;
  myBoolean: boolean;
  // usando models - interfaces
  product: Product; 

  // usar CONSTRUCTORES es buena practica, se usa en cosas complejas
  constructor() {
    this.userName = 'Edith'; 
    this.myNumber = 10;
    this.myBoolean = true; 
    this.product = {
      name: 'Computer',
      price: 1000,
      isForSale: true
    }; 
  }
  
  number: number = 0; 
  addOne() {
    this.number++; 
  }

  // bloque @if
  condition: boolean = false; 
  condition2: string = ""; 
  // bloque @for
  movies: string[] = ['Avatar', 'Titanic', 'Star Wars', 'Harry Potter']; 
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
  }; 


  // component child0 de hijo a padre
  name: string = ""; 

  // crear funcion q cuando se ejecute modifique el valor de name
  setName(e: any) {
    this.name = e; 
  }
}




