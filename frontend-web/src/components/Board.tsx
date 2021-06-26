import React from "react";
import { BackgroundColor, PieceColor } from "../utils/ColorUtils";
import styles from "./Board.module.css";
import Square from "./Square";

type BoardProps = {
  size: number;
};

export default function Board(props: BoardProps) {
  const boardPiece = Array.from({ length: props.size ** 2 }, (_, i) => i + 1);

  return (
    <div
      className={styles.base}
      style={{
        gridTemplateColumns: `repeat(${props.size}, ${
          String(100 / props.size) + "%"
        })`,
      }}
    >
      {boardPiece.flat().map((piece) => (
        <Square
          id={piece}
          key={piece}
          backgroundColor={BackgroundColor.GREY}
          pieceColor={PieceColor.BLUE}
        />
      ))}

      {/* <table className={styles.boardTable}>
        <tr className={styles.boardRow}>
          {boardPiece.map((row) => (
            <th key={row.toString()} className={styles.boardCol}>
              {row.map((col) => (
                <Square id={col} key={col} />
              ))}
            </th>
          ))}
        </tr>
      </table> */}
    </div>
  );
}
