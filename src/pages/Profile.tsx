import styles from './Profile.module.css'
import { HeaderUser } from '../components/HeaderUser'

export function Profile(){
    return(
        <div className={ styles.profile }>
            <HeaderUser/>
        </div>
    )
}