export type Mark = 'X' | 'O' | '';

export type GameResult = 'X' | 'O' | 'draw' | null;

export interface GameInterface {
  turn: 'X' | 'O';
  turnNumber: number;
  spaces: Mark[][];
  isGameOver: boolean;
  result: GameResult;
}