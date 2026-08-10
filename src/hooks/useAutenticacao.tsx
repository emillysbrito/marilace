import {FirebaseError} from 'firebase/app'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {autenticacao} from '../firebase/FirebaseConexao'
import { useContext } from 'react'
import { AutenticacaoContexto } from '../contexts/AutenticacaoContexto'

// As funções de autenticação serão disponibilizadas como um Custom Hook
export function useAutenticacao(){
    // Esse hook depende do contexto AutenticacaoContexto para ser executado
    // Por segurança é recomendável testá-lo antes

    const autenticacaoContexto = useContext(AutenticacaoContexto)

    if (autenticacaoContexto === undefined) {
        throw new Error('Falta o <AutenticacaoProvider> na aplicação!')
    }

    // Garantida sua existencia, recupera os dados gerados  
    const { usuario, carregando } = autenticacaoContexto

    const criarAutenticacaoUsuario = async (email: string, senha: string): Promise<string> => {
        let retorno = 'sucesso'
        try {
            // Cria a autenticação do usuário e retorna suas credenciais
            await createUserWithEmailAndPassword(autenticacao, email, senha)
        } catch (error) {

            if (error instanceof FirebaseError) {

                switch (error.code) {
                    case 'auth/email-already-in-use':
                        retorno = `E-mail já utilizado por outra conta. ${error.code}`
                        break

                default:
                    retorno = `Erro na criação da autenticação do usuário! (${error.code}: ${error.message})`
                    break          
                }
            } else {
                    retorno = `Erro imprevisto! (${error})`
            }
        }
        return retorno
    }


    const validarUsuario = async (email: string, senha: string): Promise<string> => {
        let retorno = 'sucesso'
        try {
            // Verifica se o email e senha informados condizem com um usuário autenticado
            await signInWithEmailAndPassword(autenticacao, email, senha)
        } catch (error) {
            if (error instanceof FirebaseError) {
                switch (error.code) {
                default:
                    retorno = `Erro na autenticação do usuário! (${error.code}: ${error.message})`
                    break         
                }
            } else {
                retorno = `Erro imprevisto! (${error})`
            }
        }
        return retorno
    }

    const deslogar = async (): Promise<string> => {
        let retorno = 'sucesso'
        try {
            await signOut(autenticacao)
        } catch (error) {
            if (error instanceof FirebaseError) {
                switch (error.code) {
                default:
                    retorno = `Erro ao deslogar o usuário! (${error.code}: ${error.message})`
                    break         
                }
            } else {
                retorno = `Erro imprevisto! (${error})`
            }
        }
        return retorno
    }

    return {criarAutenticacaoUsuario, validarUsuario, deslogar, usuario, carregando}
}
