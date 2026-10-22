import { Component , signal } from '@angular/core';
import { Game } from '../../game';
import { GameItem } from '../game-item/game-item';
@Component({
  selector: 'ali-game-list',
  imports: [GameItem],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
})
export class GameList {
    games = signal<Game[]>([
    { id: "er7", name: 'Lego', image: 'games/Lego.jpg', price: 63.4, salePrice: 63.4, forBabies: false, nbSales: 2530 },
    { id: "te70", name: 'Téléphone', image: 'games/Tel.jpg', price: 42.6, salePrice: 42.6, forBabies: true, nbSales: 7850 },
    { id: "m45", name: 'Mario', image: 'games/Mario.jpg', price: 68.2, salePrice: 68.2, forBabies: false, nbSales: 14689 },
    { id: "c17", name: 'Cercles', image: 'games/Cercles.jpg', price: 20, salePrice: 20, forBabies: true, nbSales: 22675 }
  ]);

    
    
}
