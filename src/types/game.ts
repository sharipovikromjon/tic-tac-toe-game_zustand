export type Player = "X" | "O";
export type Cell = Player | null;

export interface GameTypes {
  board: Cell[];
  currentPlayer: Player;
  winner: Player | "Draw" | null;
  playTurn: (index: number) => void;
  resetGame: () => void;
}
