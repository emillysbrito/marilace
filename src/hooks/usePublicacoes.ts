import { useEffect, useState } from 'react'
import {
    addDoc,
    collection,
    serverTimestamp,
    query,
    orderBy,
    limit,
    where,
    onSnapshot
} from 'firebase/firestore'
import { banco } from '../firebase/FirebaseConexao'
import { enviarImagem } from '../services/uploadImagem'
import { type PublicacaoTipo } from '../types/Publicacao'
import { useAutenticacao } from './useAutenticacao'

export function usePublicacoes() {
  const { usuario } = useAutenticacao()

  const criarPublicacao = async (texto: string, arquivoImagem?: File): Promise<string> => {
    if (!usuario) throw new Error('Usuário não autenticado.')

    let imageURL: string | null = null
    if (arquivoImagem) {
      imageURL = await enviarImagem(arquivoImagem)
    }

    const publicacaoRef = await addDoc(collection(banco, 'posts'), {
      authorId: usuario.uid,
      authorUsername: usuario.username,
      authorDisplayName: usuario.nome,
      authorPhotoURL: usuario.photoURL,
      text: texto,
      imageURL,
      likesCount: 0,
      commentsCount: 0,
      createdAt: serverTimestamp()
    })

    return publicacaoRef.id
  }

  return { criarPublicacao }
}

// Hook separado para o feed, já que ele escuta em tempo real
export function useFeed() {
    const [publicacoes, setPublicacoes] = useState<PublicacaoTipo[]>([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        const q = query(
            collection(banco, 'posts'),
            orderBy('createdAt', 'desc'),
            limit(20)
        )

        const unsubscribe = onSnapshot(q, (snap) => {
        const lista = snap.docs.map((d) => ({ id: d.id, ...d.data() }) as PublicacaoTipo)
            setPublicacoes(lista)
            setCarregando(false)
        })

        return () => unsubscribe()
    }, [])

    return { publicacoes, carregando }
    }

    // Hook para posts de um usuário específico (usado na página de perfil)
    export function usePublicacoesDoUsuario(uid: string | undefined) {
    const [publicacoes, setPublicacoes] = useState<PublicacaoTipo[]>([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        if (!uid) return

        const q = query(
        collection(banco, 'posts'),
        where('authorId', '==', uid),
        orderBy('createdAt', 'desc')
        )

        const unsubscribe = onSnapshot(q, (snap) => {
        const lista = snap.docs.map((d) => ({ id: d.id, ...d.data() }) as PublicacaoTipo)
        setPublicacoes(lista)
        setCarregando(false)
        })

        return () => unsubscribe()
    }, [uid])

    return { publicacoes, carregando }
}