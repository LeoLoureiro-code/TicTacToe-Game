import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-new-game-menu-component',
  imports: [],
  templateUrl: './new-game-menu-component.html',
  styleUrl: './new-game-menu-component.css',
})
export class NewGameMenuComponent {

     @ViewChildren('option') options!: QueryList<ElementRef>;

    chooseOption(event: Event) {

    const selected = event.currentTarget as HTMLElement;

    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.classList.remove('option_chosen');
    });

    selected.classList.add('option_chosen');
}
//Output options to game component (vs cpu or vs player, and which figure has player 1)
}
