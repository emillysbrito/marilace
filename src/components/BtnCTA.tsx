import styles from './BtnCTA.module.css'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

interface BtnCTAProps {
    className?: string
}

export function BtnCTA({ className }: BtnCTAProps){
    return(
        <div className={`${styles.container} ${className || ''}`}>
            <Link to="/about" className={ styles.link }>
                Saiba mais! <FaChevronRight size={16} className={styles.icon}/>
            </Link>
        </div>
    )
}