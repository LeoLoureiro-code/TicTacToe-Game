import { Component } from '@angular/core';
import { SpaceComponent } from '../space-component/space-component';

@Component({
  selector: 'board-component',
  imports: [SpaceComponent],
  templateUrl: './board-component.html',
  styleUrl: './board-component.css',
})
export class BoardComponent {

   constructor() {
  
  }

  spaces = [
  { row: 0, column: 0 },
  { row: 0, column: 1 },
  { row: 0, column: 2 },
  { row: 1, column: 0 },
  { row: 1, column: 1 },
  { row: 1, column: 2 },
  { row: 2, column: 0 },
  { row: 2, column: 1 },
  { row: 2, column: 2 }
];
}
