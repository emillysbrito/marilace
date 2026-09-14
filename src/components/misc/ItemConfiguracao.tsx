import styles from './ItemConfiguracao.module.css'
import type { IconType } from 'react-icons'
import type { ReactNode } from 'react'

interface ItemConfiguracaoProps {
    icon: IconType
    titulo: string
    descricao?: string
    children: ReactNode
}

export function ItemConfiguracao({ icon: Icon, titulo, descricao, children }: ItemConfiguracaoProps) {
    return (
        <div className={styles.item}>
            <div className={styles.info}>
                <div className={styles.iconWrapper}>
                    <Icon size={22} />
                </div>
                <div className={styles.textos}>
                    <h3>{titulo}</h3>
                    {descricao && <p>{descricao}</p>}
                </div>
            </div>
            <div className={styles.controle}>
                {children}
            </div>
        </div>
    )
}