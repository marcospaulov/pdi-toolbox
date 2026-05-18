export default function Raiz(
  matriz: number[][],
  gamma: number = 1.2
): number[][] {
  const matrizRaiz: number[][] = [];
  let pixelCalculado: number;
  for (let i = 0; i < matriz.length; i++) {
    matrizRaiz[i] = [];
    for (let j = 0; j < matriz[i].length; j++) {
      pixelCalculado = Math.pow(matriz[i][j], 1 / gamma);

      if (pixelCalculado > 255) {
        matrizRaiz[i][j] = 255;
      } else if (pixelCalculado < 0) {
        matrizRaiz[i][j] = 0;
      } else {
        matrizRaiz[i][j] = pixelCalculado;
      }
    }
  }
  return matrizRaiz;
}
