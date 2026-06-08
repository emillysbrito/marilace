import styles  from './LandingPage.module.css'

import { HeaderAnon } from '../components/HeaderAnon'
import { Btn } from '../components/Btn'
import { BtnCTA } from '../components/BtnCTA'
import { FooterAnon } from '../components/FooterAnon'

import imgRegistro from '../assets/img/colagem-cadastro.png'
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
                <img className={ styles.imgHero } src={ imgHero } />
            </div>
            <div className={ styles.fundoHero }>
                <img src={ fundoLanding } />
            </div>

            <div id='registro' className={ styles.registro }>

                <img src={ imgRegistro } className={ styles.imgRegistro } />

                <div className={ styles.conteudoRegistro }>
                    <h2 className={ styles.tituloRegistro }>Registre-se</h2>

                    <form className={ styles.formRegistro }>

                        <div className={ styles.inputContainer }>
                            <label htmlFor="nome">Seu nome completo:</label>
                            <input id='nome' type="text" />
                        </div>
                        
                        <div className={ styles.inputContainer }>
                            <label htmlFor="email">Seu e-mail:</label>
                            <input id='email' type="email" />
                        </div>

                        <div className={ styles.inputContainer }>
                            <label htmlFor="senha">Senha:</label>
                            <input id='senha' type="password" />
                        </div>

                        <div className={ styles.inputContainer }>
                            <label htmlFor="confirmarSenha">Confirme sua senha:</label>
                            <input id='confirmarSenha' type="password" />
                        </div>

                        <Btn route="/" text="Registrar"/>

                    </form>

                    <div className={ styles.estrela1 } />
                    <div className={ styles.estrela2 } />

                </div>
            </div>

            <FooterAnon />
        </div>
    )
}
