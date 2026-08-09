import styles from './ChipClicavel.module.css'

interface ChipClicavelProps {
    texto: string;
    cor: string;
    selecionado: boolean;
    onClick: () => void;
}

export function ChipClicavel({
    texto,
    cor,
    selecionado,
    onClick,
}: ChipClicavelProps) {
    return (
        <button
            type="button"
            className={`${styles.chip} ${selecionado ? styles.ativo : ''}`}
            style={{ backgroundColor: selecionado ? cor : 'var(--cinza)' }}
            onClick={onClick}
            aria-pressed={selecionado}
        >
            <div className={styles.estrela} />
            <span className={styles.texto}>{texto}</span>
            <div className={styles.estrela} />
        </button>
    );
}