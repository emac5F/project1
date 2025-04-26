import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username: string = '';// de padre a hijo
  @Output() addFavoriteEvent = new EventEmitter<string>(); // de hijo a padre

  fav(gameName: string) {
    // alert(`El juego favorito de ${this.username} es ${gameName}`);
    this.addFavoriteEvent.emit(gameName); // emite el evento al padre(app-user)
  }
  
  games = [
    {
      id: 1,
      name: 'UnCharted 4'
    },
    {
      id: 2,
      name: 'God of War'
    },
    {
      id: 3,
      name: 'Horizon Zero Dawn'
    }
  ]
}
