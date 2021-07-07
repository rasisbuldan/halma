import React, { useEffect, useState } from "react";
import Board from "../components/Board";
import { useDrag } from "react-dnd";
import { generateEmptyBoard } from "../utils/BoardUtils";
import { PieceColor } from "../utils/ColorUtils";

/**
 * Your Component
 */
/* export function Card({ isDragging, text }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );
  return (
    <div ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  );
} */
const BOARD_SIZE = 5;

export default function Home() {
  const [boardPiece, setBoardPiece] = useState(generateEmptyBoard(BOARD_SIZE));
  const [colorMap, setColorMap] = useState<Array<PieceColor>>([
    PieceColor.NO_COLOR,
    PieceColor.BLUE,
    PieceColor.YELLOW,
  ]);

  return (
    <div>
      <Board size={BOARD_SIZE} boardPiece={boardPiece} colorMap={colorMap} />
      {/* <Card isDragging={false} text="abcd" /> */}
    </div>
  );
}
