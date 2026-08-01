import { Routes } from '@angular/router'
import { NewGameMenuComponent } from '../components/new-game-menu-component/new-game-menu-component';
import { GameComponent } from '../components/game-component/game-component';

export const routes: Routes = [
    {
        path: "", 
        component: NewGameMenuComponent 
    },
    {
        path: '**',
        redirectTo: ''
    },
    {
        path:'game',
        component: GameComponent
    },
];
