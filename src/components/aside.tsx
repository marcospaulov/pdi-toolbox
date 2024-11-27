import { useState } from 'react'

interface AsideProps {
  onFilterSelect: (name: string) => void
}

export default function Aside({ onFilterSelect }: AsideProps) {
  const [activeFilter, setActiveFilter] = useState('')

  const handleFilterClick = (name: string) => {
    setActiveFilter(name)
    onFilterSelect(name)
  }

  const filters = {
    'Filtros Básicos': ['negativo', 'compressao', 'expansao'],
    'Transformações': [
      'espelhamentoH',
      'espelhamentoV',
      'rotacao90h',
      'rotacao90ah',
      'rotacao180'
    ],
    'Operações Matemáticas': [
      'logaritmo',
      'logaritmoInverso',
      'potencia',
      'raiz',
      'soma'
    ],
    'Operações Estatísticas': ['media', 'mediana', 'moda', 'max', 'min'],
    'Filtros de Aprimoramento': [
      'equalizacao',
      'highboost',
      'laplaciano',
      'prewitt',
      'sobel'
    ],
    'Interpolação': [
      'ampliacaoIB512',
      'ampliacaoIB1024',
      'interpolacaoreplicacao512',
      'interpolacaoreplicacao1024'
    ]
  }

  return (
    <aside className="w-64 bg-slate-50 p-4 min-h-screen">
      <nav>
        {Object.entries(filters).map(([category, filterList]) => (
          <div key={category} className="mb-4">
            <h2 className="text-sm font-semibold text-slate-900 mb-2">
              {category}
            </h2>
            <ul className="space-y-1">
              {filterList.map((filter) => (
                <li key={filter}>
                  <button
                    onClick={() => handleFilterClick(filter)}
                    className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      activeFilter === filter
                        ? 'bg-blue-100 text-blue-900'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
