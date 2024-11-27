export default function Equalizacao(image: number[][]): number[][] {
  try {
    // Obtém as dimensões da imagem
    const rows = image.length;
    const cols = image[0].length;
    const totalPixels = rows * cols;

    // Calcula o histograma da imagem
    // Conta a frequência de cada nível de intensidade (0-255)
    const histogram = new Array(256).fill(0);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        histogram[Math.round(image[i][j])]++;
      }
    }

    // Calcula a função de distribuição cumulativa (CDF)
    // Soma acumulada das frequências do histograma
    const cdf = new Array(256).fill(0);
    cdf[0] = histogram[0];
    for (let i = 1; i < 256; i++) {
      cdf[i] = cdf[i - 1] + histogram[i];
    }

    // Normaliza o CDF para o intervalo [0, 255]
    // Encontra o primeiro valor não-zero no CDF para normalização
    const cdfMin = cdf.find(x => x > 0) || 0;
    const normalizedCdf = cdf.map(x => 
      Math.round(((x - cdfMin) / (totalPixels - cdfMin)) * 255)
    );

    // Aplica a equalização mapeando cada pixel para seu novo valor
    const equalizedImage = Array.from({ length: rows }, () => Array(cols).fill(0));
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        equalizedImage[i][j] = normalizedCdf[Math.round(image[i][j])];
      }
    }

    return equalizedImage;
  } catch (error) {
    console.error("Erro na equalização:", error);
    return [];
  }
}