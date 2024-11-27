export default function Media(matrix: number[][], filterSize: number = 3): number[][] {
  // Obtém as dimensões da imagem
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  
  // Calcula o padding necessário baseado no tamanho do filtro
  const pad = Math.floor(filterSize / 2);

  // Cria uma nova matriz para armazenar o resultado
  const result: number[][] = Array.from({ length: numRows }, () => Array(numCols).fill(0));

  // Processa cada pixel da imagem
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let sum = 0;     // Soma dos valores dos pixels na vizinhança
      let count = 0;   // Contador de pixels válidos na vizinhança
 
      // Percorre a vizinhança do pixel atual usando o tamanho do filtro
      for (let m = -pad; m <= pad; m++) {
        for (let n = -pad; n <= pad; n++) {
          const row = i + m;
          const col = j + n;

          // Verifica se o pixel está dentro dos limites da imagem
          if (row >= 0 && row < numRows && col >= 0 && col < numCols) {
            sum += matrix[row][col];
            count++;
          }
        }
      }

      // Calcula a média dos pixels válidos na vizinhança
      result[i][j] = count > 0 ? sum / count : 0;
    }
  }

  return result;
}