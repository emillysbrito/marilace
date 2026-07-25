import styles  from './LandingPage.module.css'

import { HeaderAnon } from '../components/HeaderAnon'
import { BtnCTA } from '../components/BtnCTA'
import { FooterAnon } from '../components/FooterAnon'

import fundoLanding from '../assets/img/fundo landpage.svg'
import imgHero from '../assets/img/marie curie.png'

export function LandingPage(){
    return(
        <div className={styles.LandingPage}>
            <HeaderAnon/>

            <div className={ styles.hero }>
                <div className={ styles.textoHero }>
                    <h1 className={ styles.tituloHero }>CONHEÇA O <span>MARILACE</span></h1>
                    <p className={ styles.descHero }>Faça parte de uma comunidade colaborativa que incentiva o aprendizado, o compartilhamento de experiências e o crescimento de mulheres nas áreas STEM (Ciência, Tecnologia, Engenharia e Matemática).</p>
                    <BtnCTA className={styles.CTA} />
                </div>
                <img
                    className={ styles.imgHero }
                    src={ imgHero } 
                    alt="Colagem gráfica de Marie Curie usando óculos de pixel art, cercada por ilustrações de átomo, moléculas e elementos químicos da tabela periódica, com legenda 'Marie Curie (1867-1934)'"
                />
            </div>
            <div className={ styles.fundoHero }>
                <img src={ fundoLanding } />
            </div>
            <FooterAnon />
        </div>
    )
}
