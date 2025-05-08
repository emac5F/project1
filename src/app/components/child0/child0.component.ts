import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child0',
  imports: [],
  templateUrl: './child0.component.html',
  styleUrl: './child0.component.css'
})
export class Child0Component {
  // crear evento
  // usando decoradores
  // @Output() 
  // login: EventEmitter<any> = new EventEmitter<any>();
  
  //usando signals
  login = output<any>();
  
  userName: string = 'Edith'; // Example user name

  // crear metodo para emitir el evento
  handleLogin() {
    this.login.emit(this.userName);
  }
}
