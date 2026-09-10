import { Timestamp } from 'firebase/firestore'

export function formatarTempo(timestamp: Timestamp | null | undefined): string {
    if (!timestamp) return 'agora'

    const dataPost = timestamp.toDate()
    const agora = new Date()
    const diferencaSegundos = Math.floor((agora.getTime() - dataPost.getTime()) / 1000)

    if (diferencaSegundos < 5) return 'agora'
    if (diferencaSegundos < 60) return `há ${diferencaSegundos}s`

    const diferencaMinutos = Math.floor(diferencaSegundos / 60)
    if (diferencaMinutos < 60) return `há ${diferencaMinutos}min`

    const diferencaHoras = Math.floor(diferencaMinutos / 60)
    if (diferencaHoras < 24) return `há ${diferencaHoras}h`

    const diferencaDias = Math.floor(diferencaHoras / 24)
    if (diferencaDias < 7) return `há ${diferencaDias}d`

    const diferencaSemanas = Math.floor(diferencaDias / 7)
    if (diferencaSemanas < 4) return `há ${diferencaSemanas}sem`

    const diferencaMeses = Math.floor(diferencaDias / 30)
    if (diferencaMeses < 12) return `há ${diferencaMeses}mês${diferencaMeses > 1 ? 'es' : ''}`

    const diferencaAnos = Math.floor(diferencaDias / 365)
    return `há ${diferencaAnos}ano${diferencaAnos > 1 ? 's' : ''}`
}