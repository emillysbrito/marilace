import styles from './Registro.module.css'

import { HeaderAnon } from '../components/headers/HeaderAnon'
import { FooterAnon } from '../components/footers/FooterAnon'
import { Link, useNavigate } from 'react-router-dom'
import { TbLogin2, TbAlertCircle, TbX, TbCheck } from "react-icons/tb";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ModalMensagem } from '../components/modais/ModalMensagem'
import imgRegistro from '../assets/img/colagem-cadastro.png'
import { useState } from 'react';

const userSchema = z 
    .object({
        nome: z.string().min(3, "Informe seu nome"),
        email: z.string().email("Email inválido"),
        senha: z.string()
        .min(8, "A senha deve ter no mínimo 8 caracteres")
        .max(64, "A senha deve ter no máximo 64 caracteres")
        .regex(/[a-z]/, "A senha deve conter ao menos uma letra minúscula")
        .regex(/[A-Z]/, "A senha deve conter ao menos uma letra maiúscula")
        .regex(/[0-9]/, "A senha deve conter ao menos um número")
        .regex(/[^A-Za-z0-9]/, "A senha deve conter ao menos um caractere especial (ex: !@#$%)"),

        confirmarSenha: z.string(),
    })
        .refine((data) => data.senha === data.confirmarSenha, {
            message: "As senhas não coincidem",
            path: ["confirmarSenha"],
        });

    type FormValues = z.infer<typeof userSchema>;

const regrasSenha = [
    { label: "Mínimo de 8 caracteres", teste: (v: string) => v.length >= 8 },
    { label: "Ao menos uma letra minúscula", teste: (v: string) => /[a-z]/.test(v) },
    { label: "Ao menos uma letra maiúscula", teste: (v: string) => /[A-Z]/.test(v) },
    { label: "Ao menos um número", teste: (v: string) => /[0-9]/.test(v) },
    { label: "Ao menos um caractere especial (ex: !@#$%)", teste: (v: string) => /[^A-Za-z0-9]/.test(v) },
];

export function Registro(){

    const navigate = useNavigate();
    const [modalAberto, setModalAberto] = useState(false);

    const{
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>({ 
        resolver: zodResolver (userSchema),
        mode: "onChange",
    });

    const senhaAtual = watch("senha", "");
    
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
                                aria-describedby="senha-requisitos"
                            />

                            {senhaAtual.length > 0 && (
                                <>
                                    <ul id="senha-requisitos" className={ styles.checklistSenha }>
                                        {regrasSenha.map((regra, index) => {
                                            const atendida = regra.teste(senhaAtual);
                                            return (
                                                <li
                                                    key={index}
                                                    className={`${styles.requisitoItem} ${atendida ? styles.requisitoOk : styles.requisitoPendente}`}
                                                >
                                                    <TbX className={ styles.icon } aria-hidden="true" />
                                                    {regra.label}
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    {regrasSenha.every((regra) => regra.teste(senhaAtual)) && (
                                        <p className={ styles.senhaForte } role="status">
                                            <TbCheck className={ styles.icon } aria-hidden="true" />
                                            Senha forte!
                                        </p>
                                    )}
                                </>
                            )}
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