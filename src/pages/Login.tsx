import styles from './Login.module.css'

import { HeaderAnon } from '../components/headers/HeaderAnon'
import { FooterAnon } from '../components/footers/FooterAnon'
import { type UsuarioTipo } from '../types/Usuario'
import { Link, useNavigate } from 'react-router-dom'
import { TbUserPlus, TbAlertCircle } from "react-icons/tb";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ModalMensagem } from '../components/modais/ModalMensagem'
import { useState } from 'react'

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
    const [modalAberto, setModalAberto] = useState(false);

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
        console.log(data);
        setModalAberto(true)
    
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
                            <input type='email'
                                {...register("email")}
                            />
                            {errors.email && <p className={ styles.erro }>
                                <TbAlertCircle className={ styles.icon }/>{errors.email.message}
                            </p>}
                        </div>

                        <div className={ styles.inputContainer }>
                            <label htmlFor="senha">Senha:</label>
                            <input type='password'
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
                            Entrar
                        </button>

                    </form>
                    <Link to={'/register'}
                    className={ styles.linkRegistro }
                    >
                        Não tem uma conta? Registre-se 
                        <TbUserPlus className={ styles.icon } aria-hidden="true" />
                    </Link>

                    <div className={ styles.estrela1 } aria-hidden="true" />
                    <div className={ styles.estrela2 } aria-hidden="true" />

                </div>
            </div>
                <ModalMensagem
                    aberto={modalAberto}
                    titulo="Login realizado!"
                    mensagem="Bem-vindo(a)! Você será redirecionado para o fórum."
                    fechar={() => {
                        setModalAberto(false);
                        navegacao("/forum");
                    }}
                />
            <FooterAnon/>
        </div>
    )
}