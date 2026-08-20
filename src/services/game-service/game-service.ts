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

  AddFigure(){
    console.log("click");
  }

}
