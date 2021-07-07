import React from "react";
import { BackgroundColor, PieceColor } from "../utils/ColorUtils";
import styles from "./Board.module.css";
import Square from "./Square";

type BoardProps = {
  size: number;
  boardPiece: Array<Array<number>>;
  colorMap: Array<PieceColor>;
};

export default function Board(props: BoardProps) {
  return (
    <div
      className={styles.base}
      style={{
        gridTemplateColumns: `repeat(${props.size}, ${
          String(100 / props.size) + "%"
        })`,
      }}
    >
      {props.boardPiece.flat().map((piece, idx) => {
        console.log(piece);
        return (
          <Square
            id={idx}
            key={piece}
            backgroundColor={BackgroundColor.GREY}
            pieceColor={props.colorMap[piece]}
            hasPiece={piece > 0}
          />
        );
      })}
    </div>
  );
}
