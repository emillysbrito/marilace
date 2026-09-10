import styles from './TelaCarregamento.module.css'

export function TelaCarregamento() {
    return (
        <div className={styles.telaCarregamento}>
            <div className={styles.estrela}/>
            <p>Carregando...</p>
        </div>
    )
}