import styles from './BtnCTA.module.css'
import { Link } from 'react-router-dom'
import { TbChevronRight } from "react-icons/tb";

interface BtnCTAProps {
    className?: string
}

export function BtnCTA({ className }: BtnCTAProps){
    return(
        <div className={`${styles.container} ${className || ''}`}>
            <Link to="/about" className={ styles.link }>
                Saiba mais! <TbChevronRight size={16} className={styles.icon}/>
            </Link>
        </div>
    )
}