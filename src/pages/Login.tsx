import styles from './Login.module.css'
import { HeaderAnon } from '../components/HeaderAnon'
import { FooterAnon } from '../components/FooterAnon'


export function Login(){
    return(
        <div className={ styles.container }>
            <HeaderAnon/>
            <FooterAnon/>
        </div>
    )
}