import styles from './Login.module.css'
import { HeaderAnon } from '../components/HeaderAnon'

export function Login(){
    return(
        <div className={ styles.container }>
            <HeaderAnon/>
        </div>
    )
}