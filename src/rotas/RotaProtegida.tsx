import { Navigate } from 'react-router-dom'
import { useAutenticacao } from '../hooks/useAutenticacao'
import { type ReactNode } from 'react'

interface RotaProtegidaProps {
    children: ReactNode
}

export function RotaProtegida({ children }: RotaProtegidaProps) {

    const { usuario, carregando } = useAutenticacao()

    if (carregando) {
        return <div>Carregando segurança...</div>
    }

    if (!usuario) {
        return <Navigate to='/' replace />
    }

    return children
}