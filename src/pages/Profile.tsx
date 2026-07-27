import styles from './Profile.module.css'
import { HeaderUser } from '../components/headers/HeaderUser'
import { CardSugestoes } from '../components/misc/CardSugestoes'

export function Profile(){
    return (
        <div className={ styles.profile }>
            <HeaderUser/>
            <CardSugestoes/>
        </div>
    )
}