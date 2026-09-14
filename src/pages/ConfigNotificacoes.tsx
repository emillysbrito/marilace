import { useState } from 'react'
import styles from './Config.module.css'
import { ItemConfiguracao } from '../components/misc/ItemConfiguracao'
import { ToggleSwitch } from '../components/misc/ToggleSwitch'
import { TbBell, TbMail, TbMessage } from 'react-icons/tb'

export function ConfigNotificacoes(){

    const [notifEmail, setNotifEmail] = useState(true)
    const [notifPush, setNotifPush] = useState(true)
    const [notifSom, setNotifSom] = useState(false)

    return (
        <section className={styles.secaoCard} aria-labelledby="titulo-notificacoes">
            <div className={styles.tituloSecao}>
                <TbBell size={28} />
                <div>
                    <h2 id="titulo-notificacoes">Notificações</h2>
                    <p>Escolha como quer ser avisada sobre novidades.</p>
                </div>
            </div>

            <ItemConfiguracao icon={TbMail} titulo="Notificações por e-mail" descricao="Receba um resumo por e-mail.">
                <ToggleSwitch ativo={notifEmail} onChange={() => setNotifEmail(v => !v)} label="Notificações por e-mail" />
            </ItemConfiguracao>

            <ItemConfiguracao icon={TbBell} titulo="Notificações push" descricao="Avisos em tempo real no navegador.">
                <ToggleSwitch ativo={notifPush} onChange={() => setNotifPush(v => !v)} label="Notificações push" />
            </ItemConfiguracao>

            <ItemConfiguracao icon={TbMessage} titulo="Som de notificação" descricao="Toca um som ao receber notificações.">
                <ToggleSwitch ativo={notifSom} onChange={() => setNotifSom(v => !v)} label="Som de notificação" />
            </ItemConfiguracao>
        </section>
    )
}