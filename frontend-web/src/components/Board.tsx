import React from "react";
import styles from "./Board.module.css";
import Square from "./Square";

export default function Board() {
  const boardPiece = [
    [1, 2],
    [3, 4],
  ];

  return (
    <div className={styles.base}>
      <table>
        <tr>
          {boardPiece.map((row) => (
            <th key={row.toString()}>
              {row.map((col) => (
                <Square id={col} key={col} />
              ))}
            </th>
          ))}
        </tr>
      </table>
    </div>
  );
}
