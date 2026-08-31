import { Component } from '@angular/core';
import { BoardComponent } from "../board-component/board-component";
import { TurnDisplayComponent } from "../turn-display-component/turn-display-component";
import { GameService } from '../../services/game-service/game-service';
import { WinnerModalComponent } from '../winner-modal-component/winner-modal-component';

@Component({
  selector: 'game-component',
  imports: [BoardComponent, TurnDisplayComponent, WinnerModalComponent],
  templateUrl: './game-component.html',
  styleUrl: './game-component.css',
})
export class GameComponent {


  constructor(private gameService:GameService){}

  get isGameOver(): boolean{
    return this.gameService.gameState.isGameOver;
  }

  get crossWins(): number {
    return this.gameService.crossWins;
  }

  get circleWins(): number {
    return this.gameService.circleWins;
  }

  get drawGames(): number {
    return this.gameService.drawGames;
  }

}
