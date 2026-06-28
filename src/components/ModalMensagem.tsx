import styles from './ModalMensagem.module.css'

interface ModalMensagemProps {
    exibir: boolean
    titulo: string
    texto: string
    ocultar: () => void
}

export function ModalMensagem({exibir, ocultar, titulo, texto}: ModalMensagemProps) {

    if (exibir) {

        return(
            <div className={ styles.overlay }>
                <div className={ styles.container }>
                    <p className={ styles.titulo }>{titulo}</p>

                    <div className={ styles.containerMensagem }>
                        <p className={ styles.mensagem }>{texto}</p>
                    </div>
                    
                    <button 
                        className={ styles.botao }
                        onClick={ocultar}
                    >Fechar</button>
                </div>
            </div>
        )    
    }
}