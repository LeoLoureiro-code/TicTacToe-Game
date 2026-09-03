import { Injectable } from '@angular/core';
import { GameInterface } from '../../interfaces/game-interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GameService {


  figureUrl:string = "assets/icon-";
  turn:string = "X";
  gameMode: 'player' | 'cpu' = 'player';
  crossWins: number = 0;
  circleWins:number = 0;
  drawGames:number = 0;
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
    turn: 'X',
    turnNumber: 0,
    spaces: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    isGameOver: false,
    result: null,
  };

  constructor(private router: Router){}

  

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

    if(this.gameState.isGameOver){
      return;
    }

    if(this.gameState.spaces[row][column] !==''){
      return;
    }

    if(this.gameState.turnNumber < 9){
      this.gameState.spaces[row][column] = this.gameState.turn;

      this.gameState.turn =
      this.gameState.turn === 'X' ? 'O' : 'X';
      this.gameState.turnNumber++
    } 

    this.CheckWinner();
    this.CheckDraw();

  }

  PlayerMove(row: number, column: number) {
    this.AddFigure(row, column);

    if (this.gameMode === 'cpu' && !this.gameState.isGameOver) {
        // this.CpuMove();
    }
}

  // CpuMove() {

  //     this.AddFigure(row, column);
  // }

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
      this.gameState.result = first;
      if(this.gameState.result === 'O'){
        this.circleWins++;
      }
      if(this.gameState.result === 'X'){
        this.crossWins++;
      }
      console.log(this.gameState.result);

      this.FinishGame();

      return first;
    }

  }

  return null;
  }

  CheckDraw(){
    if(this.gameState.turnNumber === 9){
      this.gameState.result = 'draw';
      this.drawGames++;
      this.FinishGame();
    }
  }

  FinishGame(){
    this.gameState.isGameOver = true;
  }


  NextRound(){
    this.gameState.isGameOver = false;
    this.gameState.result = null;
    this.gameState.spaces =
    [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.gameState.turnNumber = 0;
    this.gameState.turn = 'X';
  }

    ResetGame() {
    this.gameState = {
      turn: 'X',
      turnNumber: 0,
      spaces: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      isGameOver: false,
      result: null
    };
    this.circleWins = 0;
    this.crossWins = 0;
    this.drawGames = 0;
  }

  QuitGame(){
    this.ResetGame();
    this.router.navigate(['/']);
  }

}
