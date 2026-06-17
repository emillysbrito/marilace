import styles from './Forum.module.css'
import { HeaderUser } from '../components/HeaderUser'

export function Forum(){
    return(
        <div className={ styles.forum }>
            <HeaderUser />
        </div>
    )
}