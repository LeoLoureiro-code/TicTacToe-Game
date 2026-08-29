import { Component } from '@angular/core';
import { GameService } from '../../services/game-service/game-service';

@Component({
  selector: 'turn-display-component',
  imports: [],
  templateUrl: './turn-display-component.html',
  styleUrl: './turn-display-component.css',
})
export class TurnDisplayComponent {

  constructor(private gameService:GameService){
  }

  get turn(): string {
    return this.gameService.turn;
  }
  
  ResetGame() {
    this.gameService.ResetGame();
  }

}
