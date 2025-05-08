import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
