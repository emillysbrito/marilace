import styles from './Login.module.css'

import { HeaderAnon } from '../components/HeaderAnon'
import { FooterAnon } from '../components/FooterAnon'
import { type UsuarioTipo } from '../types/Usuario'

import { Link, useNavigate } from 'react-router-dom'
import { Btn } from '../components/Btn'
import { TbUserPlus, TbAlertCircle } from "react-icons/tb";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import imgLogin from '../assets/img/colagem-cadastro.png'

type FormValues = {
    email: string
    senha: string
}

const userSchema =  z.object({
    email: z.string().email("E-mail inválido"),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
});

export function Login(){

    const {
        register, 
        handleSubmit,
        formState: { errors }, 
    } = useForm<FormValues>({
        resolver: zodResolver(userSchema),}
    )

    const navegacao = useNavigate()

    const dadosUsuario: UsuarioTipo = {
        nome: '',
        email: '',
        senha: ''
    }

    const autenticarUsuario = (data: FormValues) => {
        dadosUsuario.email = data.email
        dadosUsuario.senha = data.senha

        navegacao('/forum')
    }

    return(
        <div className={ styles.login }>
            <HeaderAnon/>

            <div className={ styles.containerLogin}>
                <img src={ imgLogin } className={ styles.imgLogin } />

                <div className={ styles.conteudoLogin }>
                    <h2 className={ styles.tituloLogin }>Log-in</h2>

                    <form 
                        className={ styles.formLogin }
                        onSubmit={handleSubmit(autenticarUsuario)}
                    > 

                        <div className={ styles.inputContainer }>
                            
                            <label htmlFor="email">E-mail:</label>
                            <input 
                                {...register("email")}
                            />
                            {errors.email && <p className={ styles.erro }>
                                <TbAlertCircle/>{errors.email.message}
                            </p>}
                        </div>

                        <div className={ styles.inputContainer }>
                            <label htmlFor="senha">Senha:</label>
                            <input 
                                {...register("senha")}
                            />
                            {errors.senha && <p className={ styles.erro }>
                                <TbAlertCircle className={ styles.icon }/>{errors.senha.message}
                            </p>}
                        </div>

                        <button
                            className={ styles.btnForm }
                            type='submit'
                        >
                            Registrar
                        </button>

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