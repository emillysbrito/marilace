import styles from './Registro.module.css'

import { HeaderAnon } from '../components/HeaderAnon'
import { FooterAnon } from '../components/FooterAnon'
import { Link, useNavigate } from 'react-router-dom'
import { TbLogin2, TbAlertCircle } from "react-icons/tb";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ModalMensagem } from '../components/ModalMensagem'


import imgRegistro from '../assets/img/colagem-cadastro.png'
import { useState } from 'react';

const userSchema = z 
    .object({
        nome: z.string().min(3, "Informe seu nome"),
        email: z.string().email("Email inválido"),
        senha: z.string().min(6, "A senha deve ter pelo 6 caracteres"),
        confirmarSenha: z.string(),
    })
        .refine((data) => data.senha === data.confirmarSenha, {
            message: "As senhas não coincidem",
            path: ["confirmarSenha"],
        });

    type FormValues = z.infer<typeof userSchema>;

export function Registro(){

    const navigate = useNavigate();
    const [modalAberto, setModalAberto] = useState(false);

    const{
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ 
        resolver: zodResolver (userSchema),
    });
    
    const autenticarUsuario = (data: FormValues) => {
        console.log(data);
        setModalAberto(true)
    };

    return(
        <div className={styles.registro}>
            <HeaderAnon/>

            <div className={ styles.containerRegistro }>
                <img
                    src={ imgRegistro }
                    className={ styles.imgRegistro }
                    alt="Colagem ilustrada de uma pessoa apoiada sobre um teclado, com elementos gráficos de um relógio e um caderno com coração, sobre fundo rosa"
                />


                <div className={ styles.conteudoRegistro }>
                    <h2 className={ styles.tituloRegistro }>Registre-se</h2>

                    <form className={ styles.formRegistro }
                        onSubmit = {handleSubmit(autenticarUsuario)}
                        >

                        <div className={ styles.inputContainer }>
                            <label htmlFor="nome">Seu nome completo:</label>
                            <input 
                                id='nome' 
                                type="text" 
                                {...register("nome")}
                            />
                            {errors.nome && <p className={ styles.erro } role='alert'>
                                <TbAlertCircle className={ styles.icon } aria-hidden="true" />
                                {errors.nome.message}
                            </p>}
                        </div>
                            
                        <div className={ styles.inputContainer }>
                            <label htmlFor="email">Seu e-mail:</label>
                            <input 
                                id='email' 
                                type="email" 
                                {...register("email")}
                            />
                            {errors.email && <p className={ styles.erro } role='alert'>
                                <TbAlertCircle className={ styles.icon } aria-hidden="true" />
                                {errors.email.message}
                            </p>}
                        </div>

                        <div className={ styles.inputContainer }>
                            <label htmlFor="senha">Senha:</label>
                            <input 
                                id='senha'
                                type="password" 
                                {...register("senha")}
                            />
                            {errors.senha && <p className={ styles.erro } role='alert'>
                                <TbAlertCircle className={ styles.icon } aria-hidden="true" />
                                {errors.senha.message}
                            </p>}
                        </div>

                        <div className={ styles.inputContainer }>
                            <label htmlFor="confirmarSenha">Confirme sua senha:</label>
                            <input 
                            id='confirmarSenha' 
                            type="password" 
                            {...register("confirmarSenha")}
                        />
                        {errors.confirmarSenha && <p className={ styles.erro } role='alert'>
                            <TbAlertCircle className={ styles.icon } aria-hidden="true" />
                            {errors.confirmarSenha.message}
                        </p>}
                        </div>

                        <button
                            className={ styles.btnForm }
                            type='submit'
                        >
                            Registrar
                        </button>
                    </form>
                    <Link to={'/login'}
                    className={ styles.linkLogin }
                    >
                        Já tem uma conta? Faça log-in 
                        <TbLogin2 className={ styles.icon } size={18} aria-hidden="true" />
                    </Link>

                    <div className={ styles.estrela1 } aria-hidden="true" />
                    <div className={ styles.estrela2 } aria-hidden="true" />

                </div>
            </div>
                <ModalMensagem
                    aberto={modalAberto}
                    titulo="Cadastro realizado!"
                    mensagem="Seu cadastro foi realizado com sucesso!"
                    fechar={() => {
                        setModalAberto(false);
                        navigate("/Login");
                    }}
                />
            <FooterAnon/>
        </div>

    )
}