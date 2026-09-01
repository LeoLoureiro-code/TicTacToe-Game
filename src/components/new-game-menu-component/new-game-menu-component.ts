import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameService } from '../../services/game-service/game-service';

@Component({
  selector: 'app-new-game-menu-component',
  imports: [RouterLink],
  templateUrl: './new-game-menu-component.html',
  styleUrl: './new-game-menu-component.css',
})
export class NewGameMenuComponent {

  constructor(private gameService: GameService){

  }

  StartVsPlayer() {
    this.gameService.gameMode = 'player';
  }

  StartVsCpu() {
    this.gameService.gameMode = 'cpu';
  }

}






