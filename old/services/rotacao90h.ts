export default function Rotacao90Horario(matrix: number[][]): number[][] {
  const n = matrix.length;
  const rotatedMatrix: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotatedMatrix[j][n - i - 1] = matrix[i][j];
    }
  }

  return rotatedMatrix;
}

//R 90(x,y) = (-y,x)

//x = j e y = i

// https://pt.khanacademy.org/math/geometry/hs-geo-transformations/hs-geo-rotations/a/rotating-shapes