export function generateEmptyBoard(
  n: number,
  initialValue = 0
): Array<Array<number>> {
  const m: number = Math.round(n);

  const matrix: Array<Array<number>> = [];
  for (let i = 0; i < m; i++) {
    matrix[i] = [];
    for (let j = 0; j < m; j++) {
      matrix[i][j] = initialValue;
    }
  }

  matrix[0][0] = 1;
  matrix[0][1] = 2;
  return matrix;
}
