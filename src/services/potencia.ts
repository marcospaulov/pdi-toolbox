export default function Potencia(
  matriz: number[][],
  gamma: number = 1.2
): number[][] {
  const matrizPotencia: number[][] = [];
  let pixelCalculado: number;
  for (let i = 0; i < matriz.length; i++) {
    matrizPotencia[i] = [];
    for (let j = 0; j < matriz[i].length; j++) {
      pixelCalculado = Math.pow(matriz[i][j], gamma);

      if (pixelCalculado > 255) {
        matrizPotencia[i][j] = 255;
      } else if (pixelCalculado < 0) {
        matrizPotencia[i][j] = 0;
      } else {
        matrizPotencia[i][j] = pixelCalculado;
      }
    }
  }
  return matrizPotencia;
}
