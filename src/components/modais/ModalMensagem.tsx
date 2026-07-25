import styles from "./ModalMensagem.module.css"
import { TbCircleCheckFilled } from "react-icons/tb";

type ModalProps = {
    aberto: boolean;
    titulo: string;
    mensagem: string;
    fechar: () => void;
};

export function ModalMensagem ({
    aberto,
    titulo,
    mensagem,
    fechar,
} : ModalProps) {
    if (!aberto) return null;

    return(
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>

                <div className={styles.estrela1}></div>
                <div className={styles.estrela2}></div>
                
                <div className={styles.icone}>
                    <TbCircleCheckFilled size={70}/>
                </div>

                <h2>{titulo}</h2>
                <p>{mensagem}</p>
                <button onClick={fechar}>Okay!</button>

                    <div className={styles.bolha}></div>
            </div>
        </div>
    );
}