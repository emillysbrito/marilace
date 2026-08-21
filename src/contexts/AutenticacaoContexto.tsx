import { createContext, useEffect, useState } from "react";
import { type ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { autenticacao } from "../firebase/FirebaseConexao";
import { type UsuarioTipo } from "../types/Usuario";

type AutenticacaoContextoTipo = {
    usuario: UsuarioTipo | null
    carregando: boolean
}

interface AutenticacaoProviderProps {
    children: ReactNode
}

export const AutenticacaoContexto = createContext<AutenticacaoContextoTipo| undefined>(undefined)

export function AutenticacaoProvider({ children }: AutenticacaoProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioTipo | null>(null)
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(autenticacao, (usuarioFirebase) => {

        if (usuarioFirebase) {
            const usuarioDados: UsuarioTipo = {
                codigo: usuarioFirebase.uid,
                email: usuarioFirebase.email ?? '',
            }
            setUsuario(usuarioDados)
        } else {
        setUsuario(null)
        }

        setCarregando(false)

    })
    return () => unsubscribe()
    }, [])

    return (
        <AutenticacaoContexto.Provider value={{ usuario, carregando }}>
            {children}
        </AutenticacaoContexto.Provider>
    )
}