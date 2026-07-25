import styles from './Forum.module.css'
import { TbUser, TbChevronDown } from "react-icons/tb";
import { Post } from '../components/Post';

export function Forum(){
    return(
        <main className={ styles.forum }>
            <div className={ styles.inputPost }>
                <TbUser size={24} className={ styles.iconPerfil } />
                <input type="text" placeholder='O que você está pensando?' />
            </div>

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
        </main>
    )
}