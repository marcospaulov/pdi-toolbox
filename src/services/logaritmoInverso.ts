export default function LogaritmoInverso(matrix: number[][], filterSize: number = 3): number[][] {
  const numRows = matrix.length;
  const numCols = matrix[0]?.length || 0;
  const pad = Math.floor(filterSize / 2);

  // Cria uma nova matriz preenchida com zeros para armazenar o resultado
  const result: number[][] = Array.from({ length: numRows }, () => Array(numCols).fill(0));
  const c = 255 / Math.log(1 + 255); // Constante usada no logaritmo direto

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let inverseLogValue = 0;

      const pixelOriginal = matrix[i][j];
      inverseLogValue = Math.exp(pixelOriginal / c) - 1; // Fórmula do logaritmo inverso

      // Clamping do valor para a faixa
      result[i][j] = Math.min(255, Math.max(0, inverseLogValue));
    }
  }

  return result;
}
