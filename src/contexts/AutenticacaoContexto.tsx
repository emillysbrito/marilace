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

    // State compartilhado no contexto com os dados do usuario logado
    const [usuario, setUsuario] = useState<UsuarioTipo | null>(null)
    // Verdadeiro até a primeira verificação
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        // Observa o Firebase em segundo plano verificando se o usuário continua "logado"
        const unsubscribe = onAuthStateChanged(autenticacao, (usuarioFirebase) => {

        // Se o usuario existir
        if (usuarioFirebase) {
            const usuarioDados: UsuarioTipo = {
                codigo: usuarioFirebase.uid,
                email: usuarioFirebase.email ?? '',
            }
            setUsuario(usuarioDados)
        } else {
        // Se não houver usuário limpa o estado
        setUsuario(null)
        }

        // Já carregado (verificando)
        setCarregando(false)

    })
    // A cada ciclo de verificação retira o "observador" da memória (para coloca-lo novamente na sequência)
    return () => unsubscribe()
    }, [])

    return (
        <AutenticacaoContexto.Provider value={{ usuario, carregando }}>
            {children}
        </AutenticacaoContexto.Provider>
    )
}