import { Component } from '@angular/core';
import { BoardComponent } from '../board-component/board-component';
import { ScoreComponent } from '../score-component/score-component';

@Component({
  selector: 'main-page-component',
  imports: [BoardComponent, ScoreComponent],
  templateUrl: './main-page-component.html',
  styleUrl: './main-page-component.css',
})
export class MainPageComponent {
  readonly scores = Array.from({ length: 3 });
}
