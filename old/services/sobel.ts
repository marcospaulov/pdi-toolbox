export default function sobel(matrix: number[][]): number[][] {
  const n = matrix.length;
  const m = matrix[0].length;
  const sobelMatrix: number[][] = Array.from({ length: n }, () => Array(m).fill(0));

  const sobelX = [
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1]
  ];

  const sobelY = [
    [-1, -2, -1],
    [0, 0, 0],
    [1, 2, 1]
  ];

  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < m - 1; j++) {
      let gx = 0;
      let gy = 0;


      for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
          gx += matrix[i + k][j + l] * sobelX[k + 1][l + 1];
          gy += matrix[i + k][j + l] * sobelY[k + 1][l + 1];
        }
      }

      sobelMatrix[i][j] = Math.sqrt(gx * gx + gy * gy);
    }
  }

  return sobelMatrix;
}

//https://www.researchgate.net/figure/Sobel-operator-left-and-Prewitt-operator-right_fig3_333241151
