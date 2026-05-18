interface HistogramProps {
  matrix: number[][]
}

export default function Histogram({ matrix }: HistogramProps) {
  const calculateHistogram = () => {
    const histogram = new Array(256).fill(0)
    let totalPixels = 0
    
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        const pixelValue = Math.min(255, Math.max(0, Math.round(matrix[y][x])))
        histogram[pixelValue]++
        totalPixels++
      }
    }
    
    return { histogram, totalPixels }
  }

  const { histogram, totalPixels } = calculateHistogram()
  const maxFrequency = Math.max(...histogram)
  const maxPercentage = (maxFrequency / totalPixels) * 100

  return (
    <div className="p-4">
      <div className="mb-4 font-medium text-center text-gray-900">
        Histograma de Níveis de Cinza
      </div>

      <div className="flex">
        <div className="flex flex-col justify-between pr-2 w-24 text-sm text-right">
        <div className="font-medium text-gray-900">Porcentagem</div>
          <span className="text-gray-600">{maxPercentage.toFixed(1)}%</span>
          <span className="text-gray-600">{(maxPercentage * 0.75).toFixed(1)}%</span>
          <span className="text-gray-600">{(maxPercentage * 0.5).toFixed(1)}%</span>
          <span className="text-gray-600">{(maxPercentage * 0.25).toFixed(1)}%</span>
          <span className="text-gray-600">0%</span>
        </div>

        <div className="flex-1">
          <div className="h-6 flex items-end gap-[1px] mb-1 overflow-hidden">
            {histogram.map((_, index) => (
              <div key={index} className="flex flex-col items-center" style={{ width: '3px' }}>
                {index % 16 === 0 && (
                  <div 
                    className="text-[8px] text-gray-600 -rotate-45 origin-bottom-left whitespace-nowrap"
                    style={{ marginLeft: '3px' }}
                  >
                    {index}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="h-64 flex items-end gap-[1px] bg-gray-100">
            {histogram.map((frequency, index) => {
              const heightPercent = (frequency / maxFrequency) * 100
              const percentageOfTotal = ((frequency / totalPixels) * 100).toFixed(2)

              return (
                <div
                  key={index}
                  style={{
                    height: `${heightPercent}%`,
                    backgroundColor: '#2563eb',
                    width: '3px',
                    transition: 'height 0.2s ease-in-out'
                  }}
                  className="hover:bg-blue-700"
                  title={`Nível de Cinza: ${index}
Total de Pixels: ${frequency}
Porcentagem da Imagem: ${percentageOfTotal}%`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
