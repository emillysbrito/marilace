import styles from './Notificacoes.module.css'
import { HeaderUser } from '../components/headers/HeaderUser'
import { ChipClicavel } from '../components/misc/ChipClicavel'
import { ItemNotificacao } from '../components/misc/ItemNotificacao'
import { TbMoodSmileBeam, TbStar, TbUserPlus, TbAt, TbMessage } from 'react-icons/tb'

export function Notificacoes(){

    return (
        <div className={ styles.page }>

            <HeaderUser/>

            <main className={ styles.container }>
                <div className={ styles.titulo }>
                    <h1>Notificações</h1>
                    <span className={ styles.quantidade }>0</span>
                </div>

                <div className={ styles.filtros}>
                    <ChipClicavel
                        texto='Tudo'
                        cor='var(--primaria)'
                    />
                    <ChipClicavel
                        texto='Menções'
                        cor='var(--verde)'
                    />
                    <ChipClicavel
                        texto='Seguidores'
                        cor='rgba(112, 69, 146, .8)'
                    />
                    <ChipClicavel
                        texto='Curtidas'
                        cor='var(--rosa)'
                    />
                    <ChipClicavel
                        texto='Comentários'
                        cor='var(--verde)'
                    />
                    <ChipClicavel
                        texto='MariLace'
                        cor='var(--primaria)'
                    />
                </div>

                <section className={ styles.notificacoes }>
                    <ItemNotificacao
                        icon={ TbMoodSmileBeam }
                        titulo='Boas-vindas ao MariLace!'
                        desc='Estamos muito felizes de ver você aqui! Esperamos que tenha uma experência incrível usando o MariLace :)'
                    />
                </section>
            </main>
        </div>
    )
}