import styles from './Chip.module.css'

interface ChipProps{
    texto: string;
    cor: string;
}

export function Chip({ texto, cor }:ChipProps){
    return (
        <div className={ styles.chip }
        style={{ backgroundColor: cor }}>
            <div className={ styles.estrela }/>
            <span
                className={ styles.texto }
            >
                {texto}
            </span>
            <div className={ styles.estrela }/>
        </div>
    );
}