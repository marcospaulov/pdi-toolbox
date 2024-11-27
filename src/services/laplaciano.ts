export default function Laplaciano(image: number[][]): number[][] {
  try {
    const laplacianMatrix = [
      [-1, -1, -1],
      [-1, 8, -1],
      [-1, -1, -1],
    ];

    const rows = image.length;
    const cols = image[0].length;

    // Criar matriz de saída com mesmo tamanho da matriz original
    const calculatedMatrix: number[][] = Array.from({ length: rows }, () =>
      Array(cols).fill(0)
    );

    // Aplicar convolução
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let valor = 0;

        // Percorrer a matriz Laplaciana
        for (let ki = 0; ki < laplacianMatrix.length; ki++) {
          for (let kj = 0; kj < laplacianMatrix[0].length; kj++) {
            // Calcular os índices relativos à matriz original
            const ni = i + ki - 1; // Subtrai 1 para centralizar o kernel
            const nj = j + kj - 1;

            // Adicionar valor apenas se os índices estiverem dentro dos limites
            if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
              valor += laplacianMatrix[ki][kj] * image[ni][nj];
            }
          }
        }

        // Armazenar valor calculado na matriz de saída
        calculatedMatrix[i][j] = valor;
      }
    }

    return calculatedMatrix;
  } catch (error) {
    console.error(error);
    return [];
  }
}
