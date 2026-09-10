export async function enviarImagem(arquivo: File): Promise<string> {
    const formData = new FormData()
    formData.append('file', arquivo)
    formData.append('upload_preset', 'perfil')

    const resposta = await fetch(
        `https://api.cloudinary.com/v1_1/dqdlpzkz/image/upload`,
        { method: 'POST', body: formData }
    )

    if (!resposta.ok) {
        throw new Error('Falha ao enviar a imagem.')
    }

    const dados = await resposta.json()
    return dados.secure_url
}