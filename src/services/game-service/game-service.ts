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

  AddFigure(row:number, column:number){

    if(this.gameState.spaces[row][column] !==''){
      return
    }

    this.gameState.spaces[row][column] = this.gameState.turn;


    this.gameState.turn =
    this.gameState.turn === 'X' ? 'O' : 'X';
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
