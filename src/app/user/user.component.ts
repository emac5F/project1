import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string = 'Edith Avendaño';
  isLoggedIn: boolean = false; // esta funcionando como un estado
  //recuperamos el evento emitido por el hijo(app-games) y lo guardamos en una variable
  favGame: string = '';
  getFavorite(gameName: string) {
    this.favGame = gameName;
  }

  greet(){
    alert('hola!');
  }
}
