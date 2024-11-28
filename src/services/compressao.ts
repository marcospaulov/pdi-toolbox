export default function Compressao(matrix: number[][], a: number = 2, b: number = 1): number[][] {
  const n = matrix.length;
  const filteredMatrix: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
 
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      filteredMatrix[i][j] = matrix[i][j] / a - b;
    }
  }

  return filteredMatrix;
}