import styles from './ItemNotificacao.module.css'
import type { IconType } from 'react-icons';

interface ItemNotificaoProps{
    icon: IconType;
    titulo: string;
    desc: string
}

export function ItemNotificacao({icon: Icon, titulo, desc} : ItemNotificaoProps) {
    return(
        <div className={ styles.container }>
            <div className={ styles.icon }>
                <Icon size={56}/>
            </div>
            <div className={ styles.texto }>
                <h1>{titulo}</h1>
                <p>{desc}</p>
            </div>
        </div>
    )
}