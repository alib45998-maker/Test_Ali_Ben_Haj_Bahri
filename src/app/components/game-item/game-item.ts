import { Component, input, signal } from '@angular/core';
import { Game } from '../../game';

@Component({
  selector: 'ali-game-item',
  imports: [],
  templateUrl: './game-item.html',
  styleUrl: './game-item.css',
})
export class GameItem {


  jeu = input.required<Game>();
  x = this.pourbébé();
  pourbébé(){
    return this.jeu().forBabies ? "bébés" : "non";
  }
  
  afficherpromo(){
    return "prix aprés promotion :" + this.jeu().salePrice * 0.1; 
  }

  

}
