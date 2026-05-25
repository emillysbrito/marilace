import styles  from './LandingPage.module.css'
import { HeaderAnon } from '../components/HeaderAnon'

export function LandingPage(){
    return(
        <div className={styles.LandingPage}>
            <HeaderAnon/>
        </div>
    )
}
