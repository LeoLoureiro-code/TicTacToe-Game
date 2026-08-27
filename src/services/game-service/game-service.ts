import { Injectable } from '@angular/core';
import { GameInterface } from '../../interfaces/game-interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  figureUrl:string = "assets/icon-";
  turn:string = "X";
  winningPlays = [
    [[0, 0], [0, 1], [0, 2]], // first row
    [[1, 0], [1, 1], [1, 2]], // second row
    [[2, 0], [2, 1], [2, 2]], // third row

    [[0, 0], [1, 0], [2, 0]], // first column
    [[0, 1], [1, 1], [2, 1]], // second column
    [[0, 2], [1, 2], [2, 2]], // third column

    [[0, 0], [1, 1], [2, 2]], // diagonal 1
    [[0, 2], [1, 1], [2, 0]]  // diagonal 2
  ];
  
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

  CheckWinner(){
    for (const play of this.winningPlays) {

    const [a, b, c] = play;

    const first = this.gameState.spaces[a[0]][a[1]];
    const second = this.gameState.spaces[b[0]][b[1]];
    const third = this.gameState.spaces[c[0]][c[1]];

    if (
      first !== '' &&
      first === second &&
      first === third
    ) {
      console.log('Winner:', first);
      return first;
    }
  }

  return null;
  }

}
