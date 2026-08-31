import { Component } from '@angular/core';

import { GameService } from '../../services/game-service/game-service';

@Component({
  selector: 'winner-modal-component',
  imports: [],
  templateUrl: './winner-modal-component.html',
  styleUrl: './winner-modal-component.css',
})
export class WinnerModalComponent {


  constructor(private gameService: GameService,) {}

  NextRound(){
    this.gameService.NextRound();
  }

  QuitGame(){
    this.gameService.QuitGame()
  }

  get winner(): string|null{
    console.log(this.gameService.gameState.result);
    return this.gameService.gameState.result;
  }
  
}
