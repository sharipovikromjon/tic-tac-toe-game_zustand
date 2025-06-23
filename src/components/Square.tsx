import { type Cell } from "../types/game";

interface SquareProps {
  value: Cell;
  onClick: () => void;
  style?: React.CSSProperties; // Add optional style prop
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        color: value === "X" ? "#545454" : "#fff",
        width: "100%",
        height: "10vh",
        fontSize: "3rem",
        fontWeight: "500",
        cursor: "pointer",
        backgroundColor: "#00BDAD",
        borderTop: "6px solid #00A193",
        borderLeft: "6px solid #00A193",
        borderBottom: "none",
        borderRight: "none",
        border: "6px solid #00a193",
      }}
    >
      {value}
    </button>
  );
};

export default Square;
