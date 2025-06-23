import { create } from "zustand";
import { type Player, type Cell, type GameTypes } from "../types/game";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Winner finder function
function checkWinner(board: Cell[]): Player | "Draw" | null {
  for (const [a, b, c] of winningCombos) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.every((n) => n !== null) ? "Draw" : null;
}
// To create the game store
export const useGameStore = create<GameTypes>((set, get) => ({
  board: Array(9).fill(null),
  currentPlayer: "X",
  winner: null,

  // Who is next?
  playTurn: (index: number) => {
    const { board, currentPlayer, winner } = get();

    // if the clicked square is already clicked or winner is known, ignore return nothing;
    if (board[index] || winner) return null;

    // copy the board, give "X" or "O" respectively
    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    // Call winner finder function
    const newWinner = checkWinner(newBoard);

    set({
      board: newBoard,
      currentPlayer: currentPlayer === "X" ? "O" : "X",
      winner: newWinner,
    });
  },
  resetGame: () =>
    set({
      board: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
    }),
}));
