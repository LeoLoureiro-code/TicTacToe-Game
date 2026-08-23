import { Injectable } from '@angular/core';
import { GameInterface } from '../../interfaces/game-interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  
  gameState: GameInterface = {
    turn: 'X',
    spaces: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    isGameOver: false,
    result: null
  };

  ToogleTurn(){
    let nextPlayer = ""

    if(this.gameState.turn == 'X'){
      nextPlayer = 'O';
      this.gameState.turn = 'O';
      console.log(nextPlayer);
    }
    else if(this.gameState.turn == 'O'){
      this.gameState.turn = 'X';
      nextPlayer = 'X'
      console.log(nextPlayer);
    }

    return nextPlayer;
  }

  //toogle turn
  AddFigure(){
   this.ToogleTurn();
  }

}
