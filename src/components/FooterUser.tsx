import styles from './FooterUser.module.css'

import logo from '../assets/logo.svg';
import estrela from '../assets/estrela.svg';

import { TbBrandGithub } from "react-icons/tb";
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";
import { TbMail } from "react-icons/tb";

export function FooterUser(){
    return(
        <footer className={styles.footer}>
            <main className={styles.conteudoFooter}>
                <img src={ estrela } className={ styles.estrela } />
                <img src={ logo } className={ styles.logo } />
                <div className={ styles.links }>
                    <a href="https://github.com" className={ styles.link }><TbBrandGithub size={18}/></a>
                    <a href="https://twitter.com" className={ styles.link }><TbBrandTwitter size={18}/></a>
                    <a href="https://instagram.com" className={ styles.link }><TbBrandInstagram size={18}/></a>
                    <a href="mailto:marilace@proton.me" className={ styles.link }><TbMail size={18}/></a>
            </div>
            </main>
            <hr />
            <h6 className={ styles.copyright }>
                &copy; 2026 MariLace Team. Todos os direitos reservados.
            </h6>
        </footer>
    )
}