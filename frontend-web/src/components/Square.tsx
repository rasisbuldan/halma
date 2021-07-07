import React from "react";
import { BackgroundColor, PieceColor } from "../utils/ColorUtils";
import Piece from "./Piece";
import styles from "./Square.module.css";

type SquareProps = {
  id: number;
  backgroundColor: BackgroundColor;
  pieceColor: PieceColor;
  hasPiece: boolean;
};

export default function Square(props: SquareProps) {
  return (
    <div
      className={styles.base}
      style={{
        backgroundColor:
          props.id % 2 == 0
            ? props.backgroundColor.primary
            : props.backgroundColor.secondary,
      }}
    >
      {props.hasPiece && <Piece id={props.id} pieceColor={props.pieceColor} />}
    </div>
  );
}
