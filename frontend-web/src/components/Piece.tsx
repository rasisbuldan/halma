import React, { useState, useEffect } from "react";
import { PieceColor } from "../utils/ColorUtils";
import styles from "./Piece.module.css";

type PieceProps = {
  id: number;
  pieceColor: PieceColor;
};

export default function Piece(props: PieceProps) {
  return (
    <div
      className={styles.base}
      style={{
        backgroundColor: props.pieceColor.primary,
        border: `2pt solid ${props.pieceColor.secondary}`,
      }}
    >
      {props.id}
    </div>
  );
}
