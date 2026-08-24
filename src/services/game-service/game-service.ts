import { Injectable } from '@angular/core';
import { GameInterface } from '../../interfaces/game-interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  figureUrl:string = "assets/icon-";
  turn:string = "X";
  
  gameState: GameInterface = {
    turn: 'O',
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
    this.turn = this.gameState.turn;

    if(this.gameState.turn == 'X'){
      nextPlayer = 'O';
      this.gameState.turn = 'O';
    }
    else if(this.gameState.turn == 'O'){
      this.gameState.turn = 'X';
      nextPlayer = 'X'
    }
   
    return nextPlayer;
  }

  ShowPlayerTurn(){
    return this.gameState.turn;
  }

  AddFigure(){
    let figure = this.ToogleTurn();
    return this.figureUrl + figure + ".svg";
  }

  ResetGame() {
    this.gameState = {
      turn: 'X',
      spaces: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      isGameOver: false,
      result: null
    };
  }

}
