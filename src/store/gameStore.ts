import { create } from "zustand";
import { combine } from "zustand/middleware";
import { winningCombos } from "../constants/winningCombinations";

type Player = "X" | "O";
type Cell = Player | null;

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
export const useGameStore = create(
  combine(
    // Initial values
    {
      board: Array(9).fill(null),
      currentPlayer: "X",
      winner: null as Player | "Draw" | null,
    },
    // Actions
    (set, get) => ({
      // Next player's turn
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
      // Restart the game
      resetGame: () =>
        set({
          board: Array(9).fill(null),
          currentPlayer: "X",
          winner: null,
        }),
    })
  )
);
