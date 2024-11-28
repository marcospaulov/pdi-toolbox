export default function Logaritmo(matrix: number[][], filterSize: number = 3): number[][] {
  const numRows = matrix.length;
  const numCols = matrix[0]?.length || 0;
  const pad = Math.floor(filterSize / 2);

  // Cria uma nova matriz preenchida com zeros para armazenar o resultado
  const result: number[][] = Array.from({ length: numRows }, () => Array(numCols).fill(0));
  const c = 255 / Math.log(1 + 255); // Constante de escala para transformação logarítmica

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let logValue = 0;

          const pixelOriginal = matrix[i][j];
          logValue = c * Math.log(1 + pixelOriginal);
          
      // Clamping do valor para a faixa
      result[i][j] = Math.min(255, Math.max(0, logValue));
  }
}

  return result;
}
