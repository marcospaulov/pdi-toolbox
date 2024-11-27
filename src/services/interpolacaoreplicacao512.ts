export default function InterpolacaoRepli512(matrix: number[][]): number[][] {
  if (matrix.length !== 256 || matrix.some((row) => row.length !== 256)) {
    throw new Error("A matriz de entrada deve ser 256x256.");
  }

  const newMatrix: number[][] = [];

  for (let i = 0; i < matrix.length; i++) {
    const row: number[] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      row.push(matrix[i][j], matrix[i][j]);
    }
    newMatrix.push(row, [...row]);
  }

  return newMatrix;
}
