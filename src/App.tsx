import Board from "./components/Board";
import { useGameStore } from "./store/gameStore";

const App: React.FC = () => {
  const { currentPlayer, winner, resetGame } = useGameStore();
  return (
    <div
      style={{
        backgroundColor: "#00BDAD",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <h1 style={{ fontSize: "87px", fontWeight: "500", marginBottom: "15px" }}>
        <span style={{ color: "#545454" }}>Tic </span>
        <span style={{ color: "#00A193" }}>Tac </span>
        <span style={{ color: "#fff" }}>Toe</span>
      </h1>
      {!winner && (
        <h2 style={{ color: "#000", fontSize: "32px", marginBottom: "15px" }}>
          Current Turn: {currentPlayer}
        </h2>
      )}
      {winner && (
        <h2 style={{ color: "#fff", fontSize: "32px", marginBottom: "15px" }}>
          {winner === "Draw" ? (
            "It's a draw"
          ) : (
            <>
              Winner:{" "}
              <span style={{ color: `${winner === "X" ? "#545454" : "#fff"}` }}>
                {winner}
              </span>
            </>
          )}
        </h2>
      )}
      <Board />

      <button
        onClick={resetGame}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default App;
