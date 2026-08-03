import styles from './CardSugestoes.module.css'
import { CardPerfil } from './CardPerfil'

export function CardSugestoes(){
    return(
        <div className={ styles.container }>
            <h1>Sugestões para seguir</h1>

            <div className={ styles.containerCards }>
                <CardPerfil
                nome='Ana Clara'
                username='anaclara'
                verificado
                emblemaS
                emblemaT
                />

                <CardPerfil
                nome='Emilly Brito'
                username='emillybrito'
                verificado
                emblemaT
                emblemaE
                />

                <CardPerfil
                nome='Fernanda Leal'
                username='fernandaleal'
                verificado
                emblemaT
                />

                <CardPerfil
                nome='Guilherme Martins'
                username='guilhermemartins'
                verificado
                emblemaT
                />
            </div>
            <hr className={ styles.linha} />
            <button className={ styles.btnVerTodos }>Ver todos</button>
        </div>
    )
}