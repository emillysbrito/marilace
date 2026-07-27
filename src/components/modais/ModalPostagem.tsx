import styles from './ModalPostagem.module.css'

import { TbUser,TbPhotoPlus, TbMoodSmile, TbSettings } from "react-icons/tb";

type ModalPostagemProps = {
    aberto: boolean;
    fechar: () => void;
};

export function ModalPostagem({aberto, fechar}:ModalPostagemProps){
    if (!aberto) return null;

    return(
        <div className={ styles.modalOverlay} onClick={fechar}>
            <div className={ styles.container } onClick={(e) => e.stopPropagation()}>
            {/* faz com que o modal nao feche quando o usuario clica para escrever */}
                <main>
                    <TbUser size={24} className={ styles.iconPerfil } />
                    <div className={ styles.containerInput }>
                        <span>Usuário</span>
                        <textarea
                        className={ styles.inputPostagem }
                        name="conteudoPostagem"
                        id="conteudoPostagem"
                        rows={4}
                        cols={75}
                        maxLength={300}
                        placeholder='O que você está pensando?'>
                        </textarea>
                    </div>
                </main>
                <div className={ styles.containerAcoes }>
                    <div className={ styles.acoesPostagem }>
                        <TbPhotoPlus size={24} className={ styles.acao } />
                        <TbMoodSmile size={24} className={ styles.acao } />
                        <TbSettings size={24} className={ styles.acao } />
                    </div>
                    <div className={ styles.btnsPostagem }>
                        <button className={ styles.btnCancelar }
                        onClick={fechar}>
                            Cancelar
                        </button>
                        <button className={ styles.btnPostar }>Postar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}