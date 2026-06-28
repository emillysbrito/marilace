import styles from './FooterUser.module.css'

import logo from '../assets/logo.svg';
import estrela from '../assets/estrela.svg';

import { LinkCompacto } from './LinkCompacto'

import { TbBrandGithub, TbBrandTwitter, TbBrandInstagram, TbMail } from "react-icons/tb";

export function FooterUser(){
    return(
        <footer className={styles.footer}>
            <main className={styles.conteudoFooter}>
                <img src={ estrela } className={ styles.estrela } />
                <img src={ logo } className={ styles.logo } />
                <div className={ styles.links }>
                    <LinkCompacto href="https://github.com/emillysbrito/marilace" icon={TbBrandGithub}/>
                    <LinkCompacto href="https://twitter.com" icon={TbBrandTwitter}/>
                    <LinkCompacto href="https://instagram.com" icon={TbBrandInstagram}/>
                    <LinkCompacto href="mailto:marilace@proton.me" icon={TbMail}/>
            </div>
            </main>
            <hr />
            <h6 className={ styles.copyright }>
                &copy; 2026 MariLace Team. Todos os direitos reservados.
            </h6>
        </footer>
    )
}