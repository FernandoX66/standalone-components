import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/games/interfaces/game.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class GamesComponent {
  games: Game[] = [
    {
      id: 1,
      name: 'Thirty-One',
      description:
        'Thirty-One is a game for two or more players. The objective is to get 31 points by getting cards.',
    },
    {
      id: 2,
      name: 'Solitaire',
      description:
        'Solitaire is a card game for one player where the objective is to get rid of all cards.',
    },
  ];
  selectedGame!: Game | null;

  constructor(private router: Router) {}

  selectGame(game: Game): void {
    if (this.selectedGame === game) {
      this.selectedGame = null;
      return;
    }
    this.selectedGame = game;
  }

  playGame(): void {
    const route = `games/${this.selectedGame!.name.toLowerCase()}`;
    this.router.navigate([route]);
  }
}
