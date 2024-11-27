interface HistogramProps {
  matrix: number[][]
}

export default function Histogram({ matrix }: HistogramProps) {
  // Calcula a frequência de cada nível de cinza (0-255)
  const calculateHistogram = () => {
    const histogram = new Array(256).fill(0)
    
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        const pixelValue = matrix[y][x]
        histogram[pixelValue]++
      }
    }
    
    return histogram
  }

  // Encontra o valor máximo do histograma para normalização
  const getMaxFrequency = (histogram: number[]) => {
    return Math.max(...histogram)
  }

  const histogram = calculateHistogram()
  const maxFrequency = getMaxFrequency(histogram)

  return (
    <div className="w-full h-64 flex items-end space-x-px">
      {histogram.map((frequency, index) => {
        // Normaliza a altura para caber no container
        const height = (frequency / maxFrequency) * 100
        
        return (
          <div
            key={index}
            className="flex-1 bg-blue-600 hover:bg-blue-700 transition-colors"
            style={{
              height: `${height}%`,
              minWidth: '2px'
            }}
            title={`Nível ${index}: ${frequency} pixels`}
          />
        )
      })}
    </div>
  )
}
