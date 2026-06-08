import styles from './About.module.css'
import { HeaderAnon } from '../components/HeaderAnon'
import { FooterAnon } from '../components/FooterAnon'

export function About(){
    return(
        <div className={ styles.container }>
        <HeaderAnon/>
        
        <FooterAnon/>
    </div>
    )
}