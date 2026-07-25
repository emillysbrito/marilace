import styles from './CardWomen.module.css'

interface CardWomenProps{
    src: string
    nome: string
    profissao: string
    idade: string
}

export function CardWomen({ src, nome, profissao, idade }:CardWomenProps){
    return(
        <div className={ styles.card }>
            <img src={src}  className={styles.cardImg} />
            <div className={ styles.cardInfo }>
                <h1 className={ styles.nome }>
                    {nome} <span>{idade}</span>
                </h1>
                <p className={ styles.profissao }>{profissao}</p>
            </div>
        </div>
    )
}