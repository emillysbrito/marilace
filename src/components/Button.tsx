import styles from './Button.module.css'
import { Link } from 'react-router-dom'

interface ButtonProps {
    route: string
    text: string
}

export function Button({ route, text }:ButtonProps){
    return(
        <div className={ styles.container }>
            <Link 
            to={ route }
            className={ styles.link }
            >
                { text }
            </Link>
        </div>
    )
}