import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
    <ul>
      @for (game of games; track game.id) {
        <li>{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
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
