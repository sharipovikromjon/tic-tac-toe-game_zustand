import { useGameStore } from "../store/gameStore";
import Square from "./Square";

const Board: React.FC = () => {
  const { board, playTurn } = useGameStore();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 80px)",
        gap: "0", 
        justifyContent: "center",
        outline: "none", 
      }}
    >
      {board.map((item, index) => (
        <Square
          key={index}
          value={item}
          onClick={() => playTurn(index)}
         
        />
      ))}
    </div>
  );
};

export default Board;
