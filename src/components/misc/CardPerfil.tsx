import styles from './CardPerfil.module.css'
import { useState } from 'react'
import { TbUser, TbUserPlus } from 'react-icons/tb'
import badgeVerificado from '../../assets/img/verificado.png';

interface CardPerfilProps{
    nome: string
    username: string
    verificado?: boolean;
    emblemaS?: boolean;
    emblemaT?: boolean;
    emblemaE?: boolean;
    emblemaM?: boolean;
}

export function CardPerfil({
    nome,
    username,
    verificado = false,
    emblemaS = false,
    emblemaT = false,
    emblemaE = false,
    emblemaM = false
}:CardPerfilProps){

    const [seguindo, setSeguindo] = useState(false)

    return(
        <div className={ styles.container }>
            <main>
            <TbUser size={24} className={ styles.iconPerfil } />
                <div className={ styles.info }>
                    <div className={ styles.nomeLinha }>
                        <span className={ styles.nome }>{nome}</span>

                        {verificado && <img src={badgeVerificado} className={ styles.badgeVerificado }/>}
                        {emblemaS && <span className={styles.badgeS}>s</span>}
                        {emblemaT && <span className={styles.badgeT}>t</span>}
                        {emblemaE && <span className={styles.badgeE}>e</span>}
                        {emblemaM && <span className={styles.badgeM}>m</span>}
                    </div>
                    <span className={ styles.username }>@{username}</span>
                </div>
            </main>

            <button
            className={`${styles.btnSeguir} ${seguindo ? styles.ativo : ''}`}
            onClick={() => setSeguindo(!seguindo)}>
                <TbUserPlus size={20} className={ styles.iconSeguir }/>
            </button>
        </div>
    )
}