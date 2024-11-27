export default function Mediana(matrix: number[][], filterSize: number = 3): number[][] {
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
      const neighborhood: number[] = []; // Array para armazenar os valores da vizinhança
 
      // Percorre a vizinhança do pixel atual usando o tamanho do filtro
      for (let m = -pad; m <= pad; m++) {
        for (let n = -pad; n <= pad; n++) {
          const row = i + m;
          const col = j + n;

          // Se estiver fora dos limites, adiciona 0 (padding)
          if (row < 0 || row >= numRows || col < 0 || col >= numCols) {
            neighborhood.push(0);
          } else {
            neighborhood.push(matrix[row][col]);
          }
        }
      }

      // Ordena os valores da vizinhança
      neighborhood.sort((a, b) => a - b);

      // Encontra a mediana
      const medianIndex = Math.floor(neighborhood.length / 2);
      result[i][j] = neighborhood[medianIndex];
    }
  }

  return result;
}
