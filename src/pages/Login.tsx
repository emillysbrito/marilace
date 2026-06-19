import styles from './Login.module.css'

import { HeaderAnon } from '../components/HeaderAnon'
import { FooterAnon } from '../components/FooterAnon'
import { Link } from 'react-router-dom'
import { Btn } from '../components/Btn'
import { TbUserPlus } from "react-icons/tb";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import imgLogin from '../assets/img/colagem-cadastro.png'

const userSchema =  z.object({
    email: z.string().min(1, "O e-mail é obrigatório").email("E-mail inválido"),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
});

    type UserFormData = z.infer<typeof userSchema>;


export function Login(){
    const {
        register, 
        handleSubmit,
        formState: { errors }, 
    } = useForm<UserFormData>({
        resolver: zodResolver(userSchema),
});
    function onSubmit(data: UserFormData) {
        console.log(data);
    }

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
                            <input 
                                id='email' 
                                type="email" 
                                {...register("email")}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>

                        <div className={ styles.inputContainer }>
                            <label htmlFor="senha">Senha:</label>
                            <input 
                                id='senha' 
                                type="password" 
                                {...register("senha")}
                            />
                            {errors.senha && <p>{errors.senha.message}</p>}
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