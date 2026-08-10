import { Rotas } from './rotas/Rotas'
import { AutenticacaoProvider } from './contexts/AutenticacaoContexto'

function App() {
  return (
    <AutenticacaoProvider>
      <Rotas />
    </AutenticacaoProvider>
  )
}

export default App
