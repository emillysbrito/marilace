import styles from './Forum.module.css'
import { useState } from 'react';
import { TbUser, TbChevronDown, TbPencilStar } from "react-icons/tb";
import { Post } from '../components/posts/Post';
import { ModalPostagem } from '../components/modais/ModalPostagem';

export function Forum(){
    const [modalAberto, setModalAberto] = useState(false);

    return(
        <main className={ styles.forum }>
            <button className={ styles.btnPost } onClick={() => setModalAberto(true)}>
                <TbPencilStar size={ 40 }/>
            </button>
            <button className={ styles.inputPost } onClick={() => setModalAberto(true)}>
                <TbUser size={24} className={ styles.iconPerfil } />
                <span>O que você está pensando?</span>
            </button>

            <div className={ styles.containerPosts }>

                <span className={ styles.forYou }>
                    Para você <TbChevronDown size={20}/>
                </span>

                <Post
                    avatarSrc="src/assets/img/marilace.png"
                    nome="MariLace"
                    username="marilace"
                    tempo="1d"
                    conteudo="Oie! Esse post é um teste :)"
                    curtidas={19}
                    comentarios={2}
                    compartilhamentos={4}
                    verificado
                    emblemaS
                    emblemaT
                    emblemaE
                    emblemaM
                />

                <Post
                    avatarSrc="https://i.imgur.com/wU1Mq6b.png"
                    nome="Ana Clara"
                    username="anaclara"
                    tempo="1d"
                    conteudo="Oie! Esse post é um teste :)"
                    curtidas={32}
                    comentarios={5}
                    compartilhamentos={9}
                    verificado
                    emblemaS
                    emblemaT
                />

                <Post
                    avatarSrc="https://i.imgur.com/8i4YSj0.png"
                    nome="Emilly Brito"
                    username="emillybrito"
                    tempo="1d"
                    conteudo="Oie! Esse post é um teste :)"
                    curtidas={27}
                    comentarios={3}
                    compartilhamentos={7}
                    verificado
                    emblemaT
                    emblemaE
                />

                <Post
                    avatarSrc="https://i.imgur.com/77ClU5Z.png"
                    nome="Fernanda Leal"
                    username="fernandaleal"
                    tempo="1d"
                    conteudo="Oie! Esse post é um teste :)"
                    curtidas={30}
                    comentarios={4}
                    compartilhamentos={5}
                    verificado
                    emblemaT
                />

                <Post
                    avatarSrc="https://i.imgur.com/oUp1Sjx.png"
                    nome="Guilherme Martins"
                    username="guilhermemartins"
                    tempo="1d"
                    conteudo="Oie! Esse post é um teste :)"
                    curtidas={39}
                    comentarios={8}
                    compartilhamentos={11}
                    verificado
                    emblemaT
                />

            </div>

            <ModalPostagem
                aberto={modalAberto}
                fechar={() => setModalAberto(false)}
            />
        </main>
    )
}