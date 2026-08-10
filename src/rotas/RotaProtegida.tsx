import { Navigate } from 'react-router-dom'
import { useAutenticacao } from '../hooks/useAutenticacao'
import { type ReactNode } from 'react'

interface RotaProtegidaProps {
    children: ReactNode
}

export function RotaProtegida({ children }: RotaProtegidaProps) {

    const { usuario, carregando } = useAutenticacao()

    if (carregando) {
        return <div>Carregando segurança...</div> // Evita piscar a tela de login
    }

    if (!usuario) {
        // Se não estiver logado, manda para o Login
        // O comando replace "limpa o histórico" do navegador impossibilitando o "voltar" 
        return <Navigate to='/' replace />
    }

    // Se estiver logado, renderiza o componente filho (a página protegida)
    return children
}