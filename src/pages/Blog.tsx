import styles from './Blog.module.css'
import { HeaderAnon } from '../components/HeaderAnon'
import { FooterAnon } from '../components/FooterAnon'

export function Blog(){
    return(
        <div className={ styles.container }>
            <HeaderAnon/>
            <div></div>
            <FooterAnon/>
        </div>
    )
}