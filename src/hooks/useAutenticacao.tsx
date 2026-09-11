import { FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { autenticacao, banco } from '../firebase/FirebaseConexao'
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { AutenticacaoContexto } from '../contexts/AutenticacaoContexto'
import { enviarImagem } from '../services/uploadImagem'

export function useAutenticacao(){
    // Esse hook depende do contexto AutenticacaoContexto para ser executado

    const autenticacaoContexto = useContext(AutenticacaoContexto)

    if (autenticacaoContexto === undefined) {
        throw new Error('Falta o <AutenticacaoProvider> na aplicação!')
    }

    const { usuario, carregando } = autenticacaoContexto

    const criarAutenticacaoUsuario = async ( email: string, senha: string, username: string, nome: string ): Promise<string> => {
        let retorno = 'sucesso'
        const usernameFormatado = username.toLowerCase().trim()

        try {
            // verifica se o username já está em uso
            const usernameRef = doc(banco, 'usernames', usernameFormatado)
            const usernameSnap = await getDoc(usernameRef)

            if (usernameSnap.exists()) {
                return 'Esse nome de usuário já está em uso.'
            }

            // cria a autenticação do usuário
            const credenciais = await createUserWithEmailAndPassword(autenticacao, email, senha)
            const uid = credenciais.user.uid

            // cria o documento do usuário no Firestore
            await setDoc(doc(banco, 'users', uid), {
                username: usernameFormatado,
                displayName: nome,
                bio: '',
                area: '',
                photoURL: '',
                followersCount: 0,
                followingCount: 0,
            })

            // reserva o username
            await setDoc(usernameRef, { uid })

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

    const atualizarPerfil = async (dados: { displayName: string; bio: string; area: string }): Promise<string> => {
        let retorno = 'sucesso'
        try {
            if (!usuario) throw new Error('Usuário não autenticado.')
            await updateDoc(doc(banco, 'users', usuario.uid), dados)
        } catch (error) {
            retorno = `Erro ao atualizar perfil! (${error})`
        }
        return retorno
    }

    const atualizarFotoPerfil = async (arquivo: File): Promise<string> => {
        let retorno = 'sucesso'
        try {
            if (!usuario) throw new Error('Usuário não autenticado.')
            const photoURL = await enviarImagem(arquivo)
            await updateDoc(doc(banco, 'users', usuario.uid), { photoURL })
        } catch (error) {
            retorno = `Erro ao atualizar foto de perfil! (${error})`
        }
        return retorno
    }

    const alterarUsername = async (novoUsername: string): Promise<string> => {
        let retorno = 'sucesso'
        try {
            if (!usuario) throw new Error('Usuário não autenticado.')
            if (!usuario.username) throw new Error('Usuário sem username definido.')

            const usernameAtual = usuario.username

            const novo = novoUsername.toLowerCase().trim()
            const novoRef = doc(banco, 'usernames', novo)

            const existe = await getDoc(novoRef)
            if (existe.exists()) return 'Esse nome de usuário já está em uso.'

            await setDoc(novoRef, { uid: usuario.uid })
            await deleteDoc(doc(banco, 'usernames', usernameAtual))
            await updateDoc(doc(banco, 'users', usuario.uid), { username: novo })

        } catch (error) {
            retorno = `Erro ao alterar username! (${error})`
        }
        return retorno
    }

    return { criarAutenticacaoUsuario, validarUsuario, deslogar, atualizarPerfil, atualizarFotoPerfil, alterarUsername, usuario, carregando }
}

