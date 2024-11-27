export default function EspelhamentoHorizontal(matrix: number[][]): number[][] {
  const n = matrix.length;
  const mirroredMatrix: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      mirroredMatrix[n - i - 1][j] = matrix[i][j];
    }
  }

  return mirroredMatrix;
}


//x = j e y = i
//repete o j e inverte o i