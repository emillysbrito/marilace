import styles from './ToggleSwitch.module.css'

interface ToggleSwitchProps {
    ativo: boolean
    onChange: () => void
    label: string
}

export function ToggleSwitch({ ativo, onChange, label }: ToggleSwitchProps) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={ativo}
            aria-label={label}
            className={`${styles.switch} ${ativo ? styles.ativo : ''}`}
            onClick={onChange}
        >
            <span className={styles.bolinha} />
        </button>
    )
}