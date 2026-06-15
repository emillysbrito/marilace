import styles from './Login.module.css'

import { HeaderAnon } from '../components/HeaderAnon'
import { FooterAnon } from '../components/FooterAnon'
import { Link } from 'react-router-dom'
import { Btn } from '../components/Btn'
import { TbUserPlus } from "react-icons/tb";

import imgLogin from '../assets/img/colagem-cadastro.png'

export function Login(){
    return(
        <div className={ styles.login }>
            <HeaderAnon/>

            <div className={ styles.containerLogin}>
                <img src={ imgLogin } className={ styles.imgLogin } />

                <div className={ styles.conteudoLogin }>
                    <h2 className={ styles.tituloLogin }>Log-in</h2>

                    <form className={ styles.formLogin }>                       
                        <div className={ styles.inputContainer }>
                            <label htmlFor="email">E-mail:</label>
                            <input id='email' type="email" />
                        </div>

                        <div className={ styles.inputContainer }>
                            <label htmlFor="senha">Senha:</label>
                            <input id='senha' type="password" />
                        </div>

                        <Btn route="/" text="Registrar"/>

                    </form>
                    <Link to={'/register'}
                    className={ styles.linkRegistro }
                    >
                        Não tem uma conta? Registre-se <TbUserPlus className={ styles.icon } />
                    </Link>

                    <div className={ styles.estrela1 } />
                    <div className={ styles.estrela2 } />

                </div>
            </div>

            <FooterAnon/>
        </div>
    )
}