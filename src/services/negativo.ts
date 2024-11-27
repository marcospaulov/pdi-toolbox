export default function Negativo(matrix: number[][]): number[][] {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result: number[][] = []
  
  for (let i = 0; i < rows; i++) {
    result[i] = []
    for (let j = 0; j < cols; j++) {
      result[i][j] = 255 - matrix[i][j];
    }
  }
  
  return result;
}