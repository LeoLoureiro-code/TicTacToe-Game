import { Component } from '@angular/core';
import { SpaceComponent } from '../space-component/space-component';

@Component({
  selector: 'board-component',
  imports: [SpaceComponent],
  templateUrl: './board-component.html',
  styleUrl: './board-component.css',
})
export class BoardComponent {
  readonly spaces = Array.from({ length: 6 });
}
