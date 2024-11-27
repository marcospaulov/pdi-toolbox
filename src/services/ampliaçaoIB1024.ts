export default function AmpliacaoBilinear1024(matrix: number[][]): number[][] {

  if (matrix.length !== 256 || matrix.some(row => row.length !== 256)) {
    throw new Error("A matriz de entrada deve ser 256x256.");
  }


  const newSize = 1024;
  const scale = newSize / matrix.length; 
  const newMatrix: number[][] = Array.from({ length: newSize }, () => Array(newSize).fill(0));

  for (let i = 0; i < newSize; i++) {
    for (let j = 0; j < newSize; j++) {
      const x = i / scale;
      const y = j / scale;

      const x1 = Math.floor(x);
      const y1 = Math.floor(y);
      const x2 = Math.min(x1 + 1, matrix.length - 1);
      const y2 = Math.min(y1 + 1, matrix[0].length - 1);

      const Q11 = matrix[x1][y1];
      const Q21 = matrix[x2][y1];
      const Q12 = matrix[x1][y2];
      const Q22 = matrix[x2][y2];
      
      const dx = x - x1;
      const dy = y - y1;
      const R1 = Q11 * (1 - dx) + Q21 * dx;
      const R2 = Q12 * (1 - dx) + Q22 * dx;
      const P = R1 * (1 - dy) + R2 * dy;

      newMatrix[i][j] = Math.round(P);
    }
  }

  return newMatrix;
}

//a = [ f(i , j) + f(i+1 , j) ] / 2

//e = [ f(i , j+1) + f(i+1 , j+1) ] / 2

//b = [ f(i , j) + f(i , j+1) ] / 2

//d = [ f(i+1 , j) + f(i+1 , j+1) ] / 2

//c = [ f(i , j) + f(i+1 , j) + f(i , j+1) + f(i+1,j+1) ] /  4 