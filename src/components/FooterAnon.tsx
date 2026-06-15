import styles from './FooterAnon.module.css';

import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg';
import estrela from '../assets/estrela.svg';

import { TbBrandGithub } from "react-icons/tb";
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";
import { TbMail } from "react-icons/tb";

export function FooterAnon(){
    return(
        <div className={ styles.footer }>
            <div className={ styles.conteudoFooter}>
                <div className={ styles.mainContainer }>
                    <main>
                        <div className={ styles.logo }>
                            <img src={ estrela } />
                            <img src={ logo } />
                        </div>
                        <p className={ styles.desc }>
                            Uma plataforma colaborativa para mulheres STEM.
                        </p>
                    </main>
                    <div className={ styles.links }>
                        <a href="https://github.com" className={ styles.link }><TbBrandGithub size={18}/></a>
                        <a href="https://twitter.com" className={ styles.link }><TbBrandTwitter size={18}/></a>
                        <a href="https://instagram.com" className={ styles.link }><TbBrandInstagram size={18}/></a>
                        <a href="mailto:marilace@proton.me" className={ styles.link }><TbMail size={18}/></a>
                    </div>
                </div>
                <div className={ styles.pages }>
                    <div className={ styles.page }>
                        <h5>INÍCIO</h5>
                        <Link to="/">Conheça o MariLace</Link>
                        <Link to="#registro">Registre-se</Link>
                    </div>
                    <div className={ styles.page }>
                        <h5>SOBRE</h5>
                        <Link to="/about">Como surgiu o MariLace?</Link>
                        <Link to="/about">Nossos objetivos</Link>
                        <Link to="/about">Nossa Equipe</Link>
                    </div>
                    <div className={ styles.page }>
                        <h5>BLOG</h5>
                        <Link to="/blog">Destaques da semana</Link>
                        <Link to="/blog">Ciência</Link>
                        <Link to="/blog">Tecnologia</Link>
                        <Link to="/blog">Engenharia</Link>
                        <Link to="/blog">Matemática</Link>
                    </div>
                </div>
            </div>
            <hr />
            <h6 className={ styles.copyright }>
                &copy; 2026 MariLace Team. Todos os direitos reservados.
            </h6>
        </div>
    )
}