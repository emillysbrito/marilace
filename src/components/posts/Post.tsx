import styles from "./Post.module.css";
import { TbStar, TbStarFilled, TbBookmark, TbBookmarkFilled, TbMessage, TbShare, TbDots } from "react-icons/tb";
import { useState } from "react";
import badgeVerificado from '../../assets/img/verificado.png';

interface PostProps {
    avatarSrc: string;
    nome: string;
    username: string;
    tempo: string;
    conteudo: string;
    curtidas: number;
    comentarios: number;
    compartilhamentos: number;
    verificado?: boolean;
    emblemaS?: boolean;
    emblemaT?: boolean;
    emblemaE?: boolean;
    emblemaM?: boolean;
}

export function Post({
    avatarSrc,
    nome,
    username,
    tempo,
    conteudo,
    curtidas,
    comentarios,
    compartilhamentos,
    verificado = false,
    emblemaS = false,
    emblemaT = false,
    emblemaE = false,
    emblemaM = false
}: PostProps) {

    const [curtido, setCurtido] = useState(false)
    const [salvo, setSalvo] = useState(false)

    const totalCurtidas = curtido ? curtidas + 1 : curtidas


    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img src={avatarSrc} className={styles.avatar} />

                <div className={styles.headerInfo}>
                    <div className={styles.nomeLinha}>
                        <h1 className={styles.nome}>{nome}</h1>

                        {verificado && <img src={badgeVerificado} className={ styles.badgeVerificado }/>}
                        {emblemaS && <span className={styles.badgeS}>s</span>}
                        {emblemaT && <span className={styles.badgeT}>t</span>}
                        {emblemaE && <span className={styles.badgeE}>e</span>}
                        {emblemaM && <span className={styles.badgeM}>m</span>}
                </div>

                <p className={styles.usernameLinha}>
                    @{username} • {tempo}
                </p>
                </div>

                <button className={styles.menuBtn}><TbDots/></button>
            </div>

            <p className={styles.conteudo}>{conteudo}</p>

            <div className={styles.footer}>
                <div className={styles.acoes}>
                <button
                    className={styles.iconBtn}
                    onClick={() => setCurtido(!curtido)}
                    aria-label="Curtir"
                >
                    {curtido ? (
                    <TbStarFilled className={styles.iconFavorito} size={24}/>
                    ) : (
                    <TbStar className={styles.icon} size={24} />
                    )}
                    <span>{totalCurtidas}</span>
                </button>
                <span className={styles.acao}><TbMessage size={24}/> {comentarios}</span>
                <span className={styles.acao}><TbShare size={24}/> {compartilhamentos}</span>
                </div>

                <button
                className={styles.iconBtn}
                onClick={() => setSalvo(!salvo)}
                aria-label="Salvar"
                >
                {salvo ? (
                    <TbBookmarkFilled className={styles.iconSalvo} size={24}/>
                ) : (
                    <TbBookmark className={styles.icon} size={24}/>
                )}
                </button>
            </div>
        </div>
    );
}
