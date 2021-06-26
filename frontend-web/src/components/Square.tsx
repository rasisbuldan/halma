import React from "react";
import Piece from "./Piece";
import styles from "./Square.module.css";

type SquareProps = {
  id: number;
};

export default function Square(props: SquareProps) {
  return (
    <div className={styles.base}>
      <Piece color="abcd" id={props.id} />
    </div>
  );
}
