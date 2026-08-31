import { Component, Input } from '@angular/core';
import { GameService } from '../../services/game-service/game-service';

@Component({
  standalone: true,
  selector: 'space-component',
  templateUrl: './space-component.html',
  styleUrl: './space-component.css',
})
export class SpaceComponent {

  isDisabled = false;
  isGameOver = false;

  @Input() row!: number;
  @Input() column!: number;
  @Input() index!: number;
  @Input() figure: string = '';

  constructor(public gameService:GameService){
  }

  AddFigure(){
      this.gameService.AddFigure(this.row, this.column);
  }
}
