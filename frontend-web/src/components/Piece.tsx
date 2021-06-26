import React, { useState, useEffect } from "react";
import styles from "./Piece.module.css";

type PieceProps = {
  id: number;
  color: string;
};

export default function Piece(props: PieceProps) {
  return <div className={styles.base}>{props.id}</div>;
}
