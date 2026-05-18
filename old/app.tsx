import Layout from "./components/layout"
import Aside from './components/aside'
import negativo from './services/negativo'
import compressao from './services/compressao'
import expansao from './services/expansao'
import espelhamentoH from './services/espelhamentoH'
import espelhamentoV from './services/espelhamentoV'
import rotacao90h from './services/rotacao90h'
import rotacao90ah from './services/rotacao90ah'
import rotacao180 from './services/rotacao180'
import logaritmo from './services/logaritmo'
import logaritmoInverso from './services/logaritmoInverso'
import potencia from './services/potencia'
import raiz from './services/raiz'
import media from './services/media'
import mediana from './services/mediana'
import moda from './services/moda'
import max from './services/max'
import min from './services/min'
import equalizacao from './services/equalizacao'
import highboost from './services/highboost'
import laplaciano from './services/laplaciano'
import prewitt from './services/prewitt'
import sobel from './services/sobel'
import ampliacaoIB512 from './services/ampliaçaoIB512'
import ampliacaoIB1024 from './services/ampliaçaoIB1024'
import interpolacaoreplicacao512 from './services/interpolacaoreplicacao512'
import interpolacaoreplicacao1024 from './services/interpolacaoreplicacao1024'
import soma from './services/soma'
import { ChangeEvent, useState, useEffect } from "react"
import Canvas from './components/canvas'
import { BarChart } from 'lucide-react'
import { Modal } from './components/modal'
import Histogram from './components/histogram'

interface FilterParams {
  [key: string]: number
}

function App() {
  const [filterName, setFilterName] = useState<string>('')
  const [imageMatrix, setImageMatrix] = useState<number[][]>([])
  const [originalMatrix, setOriginalMatrix] = useState<number[][]>([])
  const [secondImageMatrix, setSecondImageMatrix] = useState<number[][]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [showHistogram, setShowHistogram] = useState(false)
  const [showMixModal, setShowMixModal] = useState(false)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [firstImagePercentage, setFirstImagePercentage] = useState(50)
  const [secondImagePercentage, setSecondImagePercentage] = useState(50)
  const [filterParams, setFilterParams] = useState<FilterParams>({})

  const filterConfig = {
    expansao: {
      params: [
        { name: 'a', label: 'Fator A', defaultValue: 2 },
        { name: 'b', label: 'Fator B', defaultValue: 1 }
      ]
    },
    compressao: {
      params: [
        { name: 'a', label: 'Fator A', defaultValue: 2 },
        { name: 'b', label: 'Fator B', defaultValue: 1 }
      ]
    },
    potencia: {
      params: [
        { name: 'gamma', label: 'Gamma', defaultValue: 1.2 }
      ]
    },
    raiz: {
      params: [
        { name: 'gamma', label: 'Gamma', defaultValue: 1.2 }
      ]
    },
    media: {
      params: [
        { name: 'tamanhoJanela', label: 'Mascara', defaultValue: 3 }
      ]
    },
    mediana: {
      params: [
        { name: 'tamanhoJanela', label: 'Mascara', defaultValue: 3 }
      ]
    },
    moda: {
      params: [
        { name: 'tamanhoJanela', label: 'Mascara', defaultValue: 3 }
      ]
    },
    max: {
      params: [
        { name: 'tamanhoJanela', label: 'Mascara', defaultValue: 3 }
      ]
    },
    min: {
      params: [
        { name: 'tamanhoJanela', label: 'Mascara', defaultValue: 3 }
      ]
    },
    highboost: {
      params: [
        { name: 'ampliacao', label: 'Fator de Ampliação', defaultValue: 5 }
      ]
    }
  }

  useEffect(() => {
    if (imageMatrix.length > 0) {
      setDimensions({
        height: imageMatrix.length,
        width: imageMatrix[0].length
      })
    }
  }, [imageMatrix])

  const handleFilterSelect = (name: string) => {
    setFilterName(name)
    
    // Reseta os parâmetros do filtro
    if (filterConfig[name as keyof typeof filterConfig]) {
      const defaultParams: FilterParams = {}
      filterConfig[name as keyof typeof filterConfig].params.forEach(param => {
        defaultParams[param.name] = param.defaultValue
      })
      setFilterParams(defaultParams)
      setShowFilterModal(true)
    } else {
      applyFilter(name)
    }
  }

  const applyFilter = (name: string) => {
    switch (name) {
      // Filtros Básicos
      case 'negativo':
        const matrixNegativo = negativo(imageMatrix)
        setImageMatrix(matrixNegativo)
        break
      case 'compressao':
        const matrixCompressao = compressao(imageMatrix)
        setImageMatrix(matrixCompressao)
        break
      case 'expansao':
        const matrixExpansao = expansao(imageMatrix)
        setImageMatrix(matrixExpansao)
        break

      // Transformações
      case 'espelhamentoH':
        const matrixH = espelhamentoH(imageMatrix)
        setImageMatrix(matrixH)
        break
      case 'espelhamentoV':
        const matrixV = espelhamentoV(imageMatrix)
        setImageMatrix(matrixV)
        break
      case 'rotacao90h':
        const matrix90h = rotacao90h(imageMatrix)
        setImageMatrix(matrix90h)
        break
      case 'rotacao90ah':
        const matrix90ah = rotacao90ah(imageMatrix)
        setImageMatrix(matrix90ah)
        break
      case 'rotacao180':
        const matrix180 = rotacao180(imageMatrix)
        setImageMatrix(matrix180)
        break

      // Operações Matemáticas
      case 'logaritmo':
        const matrixLog = logaritmo(imageMatrix, filterParams.c)
        setImageMatrix(matrixLog)
        break
      case 'logaritmoInverso':
        const matrixLogInv = logaritmoInverso(imageMatrix, filterParams.c)
        setImageMatrix(matrixLogInv)
        break
      case 'potencia':
        const matrixPot = potencia(imageMatrix, filterParams.gamma)
        setImageMatrix(matrixPot)
        break
      case 'raiz':
        const matrixRaiz = raiz(imageMatrix, filterParams.gamma)
        setImageMatrix(matrixRaiz)
        break

      // Operações Estatísticas
      case 'media':
        const matrixMedia = media(imageMatrix, filterParams.tamanhoJanela)
        setImageMatrix(matrixMedia)
        break
      case 'mediana':
        const matrixMediana = mediana(imageMatrix, filterParams.tamanhoJanela)
        setImageMatrix(matrixMediana)
        break
      case 'moda':
        const matrixModa = moda(imageMatrix, filterParams.tamanhoJanela)
        setImageMatrix(matrixModa)
        break
      case 'max':
        const matrixMax = max(imageMatrix, filterParams.tamanhoJanela)
        setImageMatrix(matrixMax)
        break
      case 'min':
        const matrixMin = min(imageMatrix, filterParams.tamanhoJanela)
        setImageMatrix(matrixMin)
        break

      // Filtros de Aprimoramento
      case 'equalizacao':
        setOriginalMatrix([...imageMatrix])
        const equalizedMatrix = equalizacao(imageMatrix)
        setImageMatrix(equalizedMatrix)
        break
      case 'highboost':
        const matrixHB = highboost(imageMatrix, filterParams.ampliacao)
        setImageMatrix(matrixHB)
        break
      case 'laplaciano':
        const matrixL = laplaciano(imageMatrix)
        setImageMatrix(matrixL)
        break
      case 'prewitt':
        const matrixP = prewitt(imageMatrix)
        setImageMatrix(matrixP)
        break
      case 'sobel':
        const matrixS = sobel(imageMatrix)
        setImageMatrix(matrixS)
        break

      // Interpolação
      case 'ampliacaoIB512':
        const matrixIB512 = ampliacaoIB512(imageMatrix)
        setImageMatrix(matrixIB512)
        break
      case 'ampliacaoIB1024':
        const matrixIB1024 = ampliacaoIB1024(imageMatrix)
        setImageMatrix(matrixIB1024)
        break
      case 'interpolacaoreplicacao512':
        const imageI = interpolacaoreplicacao512(imageMatrix)
        setImageMatrix(imageI)
        break
      case 'interpolacaoreplicacao1024':
        const imageII = interpolacaoreplicacao1024(imageMatrix)
        setImageMatrix(imageII)
        break
        
      case 'soma':
        setShowMixModal(true)
        break

      default:
        console.warn('Filtro não implementado:', name)
    }
    setShowFilterModal(false)
  }

  const handleParamChange = (paramName: string, value: string) => {
    setFilterParams(prev => ({
      ...prev,
      [paramName]: Number(value)
    }))
  }

  const handleMixImages = () => {
    if (imageMatrix.length > 0 && secondImageMatrix.length > 0) {
      try {
        const percent1 = firstImagePercentage / 100
        const percent2 = secondImagePercentage / 100
        
        const mixedMatrix = soma(imageMatrix, secondImageMatrix, percent1, percent2)
        setImageMatrix(mixedMatrix)
        setShowMixModal(false)
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        } else {
          alert('Erro ao misturar as imagens. Verifique se ambas têm o mesmo tamanho.')
        }
      }
    }
  }

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione um arquivo de imagem válido.')
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          
          canvas.width = img.width
          canvas.height = img.height
          
          if (ctx) {
            ctx.drawImage(img, 0, 0)
            const imageData = ctx.getImageData(0, 0, img.width, img.height)
            const data = imageData.data
            
            const grayMatrix: number[][] = []
            
            for (let y = 0; y < img.height; y++) {
              grayMatrix[y] = []
              for (let x = 0; x < img.width; x++) {
                const i = (y * img.width + x) * 4
                const gray = Math.round(
                  0.299 * data[i] +
                  0.587 * data[i + 1] +
                  0.114 * data[i + 2]
                )
                grayMatrix[y][x] = gray
              }
            }
            
            setImageMatrix(grayMatrix)
            setOriginalMatrix(grayMatrix)
            setDimensions({ width: img.width, height: img.height })
          }
        }
        img.src = e.target?.result as string
      }
      reader.onerror = () => {
        alert('Erro ao ler o arquivo de imagem.')
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSecondImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione um arquivo de imagem válido.')
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          
          canvas.width = img.width
          canvas.height = img.height
          
          if (ctx) {
            ctx.drawImage(img, 0, 0)
            const imageData = ctx.getImageData(0, 0, img.width, img.height)
            const data = imageData.data
            
            const grayMatrix: number[][] = []
            
            for (let y = 0; y < img.height; y++) {
              grayMatrix[y] = []
              for (let x = 0; x < img.width; x++) {
                const i = (y * img.width + x) * 4
                const gray = Math.round(
                  0.299 * data[i] +
                  0.587 * data[i + 1] +
                  0.114 * data[i + 2]
                )
                grayMatrix[y][x] = gray
              }
            }
            
            setSecondImageMatrix(grayMatrix)
          }
        }
        img.src = e.target?.result as string
      }
      reader.onerror = () => {
        alert('Erro ao ler o arquivo de imagem.')
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Layout>
      <div className="flex">
        <Aside onFilterSelect={handleFilterSelect} />
        <main className="flex-1 p-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Imagem Principal
            </label>
            <input
              type="file"
              onChange={handleImageSelect}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          {imageMatrix.length > 0 && (
            <div className="mt-4">
              <Canvas
                matrix={imageMatrix}
                width={dimensions.width}
                height={dimensions.height}
              />
            </div>
          )}
        </main>
      </div>

      <button
        onClick={() => setShowHistogram(true)}
        className="fixed right-4 bottom-4 p-3 text-white bg-blue-600 rounded-full shadow-lg transition-colors hover:bg-blue-700"
        title="Mostrar Histograma"
      >
        <BarChart className="w-6 h-6" />
      </button>

      <Modal
        isOpen={showHistogram}
        onClose={() => setShowHistogram(false)}
        title="Histograma da Imagem"
        maxWidth="2xl"
      >
        {imageMatrix.length > 0 ? (
          <div className="p-4">
            {filterName === 'equalizacao' && originalMatrix.length > 0 && (
              <div className="mb-8">
                <h3 className="mb-2 text-lg font-semibold">Histograma Original</h3>
                <Histogram matrix={originalMatrix} />
              </div>
            )}
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                {filterName === 'equalizacao' ? 'Histograma Equalizado' : 'Histograma'}
              </h3>
              <Histogram matrix={imageMatrix} />
            </div>
          </div>
        ) : (
          <div className="p-4 text-center text-gray-500">
            Carregue uma imagem para ver o histograma
          </div>
        )}
      </Modal>

      <Modal
        isOpen={showMixModal}
        onClose={() => setShowMixModal(false)}
        title="Misturar Imagens"
      >
        <div className="p-4 space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Segunda Imagem
            </label>
            <input
              type="file"
              onChange={handleSecondImageSelect}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Porcentagem da primeira imagem: {firstImagePercentage}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={firstImagePercentage}
                onChange={(e) => setFirstImagePercentage(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Porcentagem da segunda imagem: {secondImagePercentage}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={secondImagePercentage}
                onChange={(e) => setSecondImagePercentage(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {secondImageMatrix.length > 0 && (
            <div className="mt-4">
              <button
                onClick={handleMixImages}
                className="px-4 py-2 w-full text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
              >
                Misturar Imagens
              </button>
            </div>
          )}
        </div>
      </Modal>

      <Modal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        title={`Configurar ${filterName}`}
      >
        <div className="p-4 space-y-4">
          {filterConfig[filterName as keyof typeof filterConfig]?.params.map((param) => (
            <div key={param.name}>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                {param.label}
              </label>
              <input
                type="number"
                step="0.1"
                value={filterParams[param.name]}
                onChange={(e) => handleParamChange(param.name, e.target.value)}
                className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          
          <button
            onClick={() => applyFilter(filterName)}
            className="px-4 py-2 w-full text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
          >
            Aplicar Filtro
          </button>
        </div>
      </Modal>
    </Layout>
  )
}

export default App
