# Processamento Digital de Imagens (PDI)

Uma aplicação web para processamento digital de imagens desenvolvida com React e TypeScript. O projeto oferece uma interface intuitiva para aplicar diversos filtros e transformações em imagens.

## 🚀 Funcionalidades

### Recursos Gerais
- **Padding**: Completar as bordas da matriz com 0

### Filtros por Desenvolvedor

#### Luciano
- **Filtros de Logaritmo**: 
  - Transformação logarítmica (parâmetro: constante)
- **Filtros de Logaritmo Inverso**: 
  - Transformação logarítmica inversa (parâmetro: constante)
- **Filtro da Média**: 
  - Suavização por média (parâmetro: tamanho da janela)
- **Operadores High Boost**: 
  - Realce de bordas (parâmetros: constante, tamanho da janela)
- **Ampliação com Interpolação por Replicação**: 
  - Nearest Neighbor (512x512 e 1024x1024)
- **Negativo**: 
  - Inverte os valores da matriz (255 - valor)
- **Ampliação com Interpolação por Replicação**:
  - Nearest Neighbor (512x512 e 1024x1024)
#### Gabriel

- **Ampliação com Interpolação Bilinear**: 512x512 e 1024x1024
- **Rotações**:
  - Rotação 90° horário
  - Rotação 90° anti-horário
  - Rotação 180°
- **Espelhamentos**:
  - Horizontal
  - Vertical
- **Filtros de Ajuste**:
  - Expansão
  - Compressão
- **Detectores de Borda**:
  - Prewitt
  - Sobel

#### Marcos
- **Filtros de Correção Gamma**:
  - Potência (parâmetro: gamma)
  - Raiz (parâmetro: gamma)
- **Filtros Estatísticos**:
  - Mediana (parâmetro: tamanho da janela)
  - Moda (parâmetro: tamanho da janela)
  - Máximo (MAX)
  - Mínimo (MIN)
- **Análise de Histograma**:
  - Visualização gráfica do histograma
  - Equalização com histograma resultante
- **Mistura de Imagens**:
  - Soma de duas imagens com porcentagens ajustáveis
- **Outros Filtros**:
  - Laplaciano

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface
- **TypeScript**: Linguagem de programação
- **Vite**: Ferramenta de build
- **Tailwind CSS**: Framework CSS
- **Lucide React**: Biblioteca de ícones

## 📦 Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:
```bash
cd newPDI
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

## 💻 Como Usar

1. **Upload de Imagem**:
   - Clique no botão de upload para selecionar uma imagem
   - A imagem será convertida automaticamente para escala de cinza

2. **Aplicação de Filtros**:
   - Selecione um filtro na barra lateral
   - Se o filtro tiver parâmetros, ajuste-os no modal que aparece
   - Clique em "Aplicar Filtro" para ver o resultado

3. **Mistura de Imagens**:
   - Selecione o filtro "soma"
   - Faça upload da segunda imagem
   - Ajuste a porcentagem de cada imagem usando os sliders
   - Clique em "Misturar Imagens"

4. **Visualização de Histograma**:
   - Clique no botão flutuante com ícone de gráfico
   - Para filtros de equalização, você verá tanto o histograma original quanto o equalizado

## 🤝 Contribuidores

1. Marcos Paulo (https://github.com/MarcosPauloV)
2. Gabriel (https://github.com/Gabrielsatos)
3. Luciano (https://github.com/LucianoCarvalhoJunior)
