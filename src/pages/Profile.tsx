import styles from './Profile.module.css'
import { HeaderUser } from '../components/headers/HeaderUser'
import { CardPerfil } from '../components/misc/CardPerfil'

export function Profile(){
    return (
        <div className={ styles.profile }>
            <HeaderUser/>
            <CardPerfil
            nome='Ana Clara'
            username='ana'
            verificado
            emblemaS
            emblemaT
            />
        </div>
    )
}