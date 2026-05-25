import styles from './About.module.css'
import { HeaderAnon } from '../components/HeaderAnon'

export function About(){
    return(
        <div className={ styles.container }>
        <HeaderAnon/>
        <h1>sobre</h1>
    </div>
    )
}