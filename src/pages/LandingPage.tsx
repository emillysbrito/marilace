import styles  from './LandingPage.module.css'
import { HeaderAnon } from '../components/HeaderAnon'
import { Btn } from '../components/Btn'

import imgRegistro from '../assets/img/colagem-cadastro.png'

export function LandingPage(){
    return(
        <div className={styles.LandingPage}>
            <HeaderAnon/>

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

                        <Btn text="Registrar" className={ styles.btnRegistro } />

                    </form>

                    <div className={ styles.estrela1 } />
                    <div className={ styles.estrela2 } />

                </div>
            </div>

        </div>
    )
}
