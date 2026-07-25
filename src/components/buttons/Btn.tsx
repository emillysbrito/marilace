import styles from './Btn.module.css'
import { Link } from 'react-router-dom'

interface BtnProps {
    route: string
    text: string
    className?: string
}

export function Btn({ route, text, className }: BtnProps){
    return(
        <div className={`${styles.container} ${className}`}>
            <Link to={ route } className={ styles.link }>
                <span>{ text }</span>
            </Link>
        </div>
    )
}