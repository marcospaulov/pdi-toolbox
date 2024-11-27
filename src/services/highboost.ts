export default function HighBoost(matrix: number[][], filterSize: number = 3, ampliacao: number = 5): number[][] {
  const numRows = matrix.length;
  const numCols = matrix[0]?.length || 0;
  const pad = Math.floor(filterSize / 2);

  // Cria uma nova matriz preenchida com zeros para armazenar o resultado
  const result: number[][] = Array.from({ length: numRows }, () => Array(numCols).fill(0));

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const originalValue = matrix[i][j];
      let smoothedValue = 0;
      let weight = 0;

      // Aplica a suavização média na vizinhança com padding zero
      for (let m = -pad; m <= pad; m++) {
        for (let n = -pad; n <= pad; n++) {
          const row = i + m;
          const col = j + n;

          // Verifica se o índice está dentro dos limites; caso contrário, aplica padding zero
          if (row >= 0 && row < numRows && col >= 0 && col < numCols) {
            smoothedValue += matrix[row][col];
            weight++;
          }
        }
      }

      // Calcula a média da vizinhança
      smoothedValue = weight > 0 ? smoothedValue / weight : 0;

      // Aplica a fórmula do filtro High Boost
      const highBoostValue = originalValue + (ampliacao - 1) * (originalValue - smoothedValue);

      // Limita o valor ao intervalo [0, 255]
      result[i][j] = Math.min(255, Math.max(0, highBoostValue));
    }
  }

  return result;
}
