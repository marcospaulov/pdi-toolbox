export default function soma(
  matriz1: number[][],
  matriz2: number[][],
  peso1: number,
  peso2: number
): number[][] {
  // Verifica se as matrizes têm o mesmo tamanho
  if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
    throw new Error('As imagens precisam ter o mesmo tamanho para serem misturadas')
  }

  const resultado: number[][] = []
  
  for (let y = 0; y < matriz1.length; y++) {
    resultado[y] = []
    for (let x = 0; x < matriz1[y].length; x++) {
      // Calcula a soma ponderada dos pixels
      const pixel1 = matriz1[y][x] * peso1
      const pixel2 = matriz2[y][x] * peso2
      
      // Garante que o valor final está entre 0 e 255
      const valorFinal = pixel1 + pixel2
      resultado[y][x] = Math.min(255, Math.max(0, Math.round(valorFinal)))
    }
  }
  
  return resultado
}
