export type Mark = 'X' | 'O' | '';

export type GameResult = 'X' | 'O' | 'draw' | null;

export interface GameInterface {
  turn: 'X' | 'O';
  spaces: Mark[][];
  isGameOver: boolean;
  result: GameResult;
}