import styles from './HeaderAnon.module.css'
import logo from '../../assets/logo.svg'

import { Link } from 'react-router-dom'
import { Btn } from '../buttons/Btn'

export function HeaderAnon(){
    return(
        <div className={ styles.container }>

            <ul className={ styles.nav }>
                <Link to={'/'} className={ styles.navItem }>Início</Link>
                <Link to={'/about'} className={ styles.navItem }>Sobre</Link>
                <Link to={'/blog'} className={ styles.navItem }>Blog</Link>
            </ul>
            <img src={ logo } className={ styles.logo } />
            <div className={ styles.containerBtns }>
                <Link to={'/login'} className={ styles.btnLogin }>Log-In</Link>
                <Btn
                    route='/register'
                    text='Registre-se'/>
            </div>
        </div>
    )
}