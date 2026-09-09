import { Component, ElementRef, QueryList, viewChildren, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameService } from '../../services/game-service/game-service';

@Component({
  selector: 'app-new-game-menu-component',
  imports: [RouterLink],
  templateUrl: './new-game-menu-component.html',
  styleUrl: './new-game-menu-component.css',
})
export class NewGameMenuComponent {

  selectedMark: 'X' | 'O' = 'X';

  constructor(private gameService: GameService){

  }

  StartVsPlayer() {
    this.gameService.gameMode = 'player';
    console.log(this.gameService.gameMode);
  }

  StartVsCpu() {
    this.gameService.gameMode = 'cpu';
     console.log(this.gameService.gameMode);
  }

  ChoseMark(mark: 'X' | 'O'){
    this.selectedMark = mark;
  }

}






