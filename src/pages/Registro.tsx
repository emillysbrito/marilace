import styles from './Registro.module.css'

import { Btn } from '../components/Btn'
import { HeaderAnon } from '../components/HeaderAnon'
import { FooterAnon } from '../components/FooterAnon'
import { Link } from 'react-router-dom'
import { TbLogin2 } from "react-icons/tb";
import imgRegistro from '../assets/img/colagem-cadastro.png'

export function Registro(){
    return(
        <div className={styles.registro}>
            <HeaderAnon/>

            <div className={ styles.containerRegistro }>
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
                    <Link to={'/login'}
                    className={ styles.linkLogin }
                    >
                        Já tem uma conta? Faça log-in <TbLogin2 className={ styles.icon } size={18} />
                    </Link>

                    <div className={ styles.estrela1 } />
                    <div className={ styles.estrela2 } />

                </div>
            </div>
            
            <FooterAnon/>
        </div>

    )
}