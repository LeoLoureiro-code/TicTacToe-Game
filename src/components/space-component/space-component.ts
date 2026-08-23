import { Component } from '@angular/core';
import { GameService } from '../../services/game-service/game-service';

@Component({
  standalone: true,
  selector: 'space-component',
  templateUrl: './space-component.html',
  styleUrl: './space-component.css',
})
export class SpaceComponent {

  figure:string = "";

  constructor(private gameService:GameService){

  }

  AddFigure(){
    this.figure = this.gameService.ToogleTurn().toLocaleLowerCase();
  }
}
