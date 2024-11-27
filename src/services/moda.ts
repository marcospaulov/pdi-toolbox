function Moda(matriz: number[][], tamanhoFiltro: number = 3): number[][] {
  if (tamanhoFiltro % 2 === 0) {
    throw new Error('O tamanho do filtro deve ser ímpar');
  }

  const linhas = matriz.length;
  const colunas = matriz[0].length;
  const matrizResultado: number[][] = Array.from({ length: linhas }, () =>
    Array(colunas).fill(0)
  );

  // Calcula o raio do filtro (quantos pixels para cada lado)
  const raio = Math.floor(tamanhoFiltro / 2);

  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      // Coletar valores da vizinhança tamanhoFiltro x tamanhoFiltro
      const vizinhanca: number[] = [];
      for (let di = -raio; di <= raio; di++) {
        for (let dj = -raio; dj <= raio; dj++) {
          const ni = i + di;
          const nj = j + dj;
          if (ni >= 0 && ni < linhas && nj >= 0 && nj < colunas) {
            vizinhanca.push(matriz[ni][nj]);
          }
        }
      }

      // Encontrar o valor mais frequente (moda)
      const frequencia = new Map<number, number>();
      let maxFreq = 0;
      let moda = vizinhanca[0];

      for (const valor of vizinhanca) {
        const freq = (frequencia.get(valor) || 0) + 1;
        frequencia.set(valor, freq);
        
        if (freq > maxFreq) {
          maxFreq = freq;
          moda = valor;
        } else if (freq === maxFreq && valor < moda) {
          // Em caso de empate, escolhe o menor valor
          moda = valor;
        }
      }

      matrizResultado[i][j] = moda;
    }
  }

  return matrizResultado;
}

export default Moda;
