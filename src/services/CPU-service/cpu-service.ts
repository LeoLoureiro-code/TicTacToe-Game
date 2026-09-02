import { Injectable } from '@angular/core';
import { GameService } from '../game-service/game-service';

@Injectable({
  providedIn: 'root',
})
export class CPUService {

  

constructor(private gameService: GameService){}
  
  
GetAvailableSpaces(){

  const availableSpaces = [];

  for (let row = 0; row < 3; row++) {
  for (let column = 0; column < 3; column++) {

    if (this.gameService.gameState.spaces[row][column] === '') {
      availableSpaces.push([row, column]);
    }
    
    const randomSpace =
    availableSpaces[Math.floor(Math.random() * availableSpaces.length)];

    this.gameService.AddFigure(randomSpace[0], randomSpace[1]);
  }
}

}

// GetRandomMove(){

// }

// GetBestMove(){

// }

// Minimax(){

// }

}
