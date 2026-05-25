import styles from './Blog.module.css'
import { HeaderAnon } from '../components/HeaderAnon'

export function Blog(){
    return(
        <div className={ styles.container }>
            <HeaderAnon/>
        </div>
    )
}