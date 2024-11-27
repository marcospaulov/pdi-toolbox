import { useEffect, useRef } from 'react'

interface CanvasProps {
  matrix: number[][]
  width: number
  height: number
}

export default function Canvas({ matrix, width, height }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !matrix.length) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Criar um ImageData a partir da matriz
    const imageData = ctx.createImageData(width, height)
    const data = imageData.data

    // Preencher o ImageData com os valores da matriz
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pixelIndex = (y * width + x) * 4
        const pixelValue = matrix[y][x]

        // Definir os valores RGB (assumindo escala de cinza)
        data[pixelIndex] = pixelValue     // R
        data[pixelIndex + 1] = pixelValue // G
        data[pixelIndex + 2] = pixelValue // B
        data[pixelIndex + 3] = 255        // A (opacidade)
      }
    }

    // Renderizar a imagem no canvas
    ctx.putImageData(imageData, 0, 0)
  }, [matrix, width, height])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="border border-gray-300 rounded-lg"
    />
  )
}
