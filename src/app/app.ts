import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameItem } from './components/game-item/game-item';
import { GameList } from './components/game-list/game-list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,GameItem,GameList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TestAliBenHajBahri');
}
