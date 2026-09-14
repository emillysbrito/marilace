import { useState } from 'react'
import styles from './Config.module.css'
import { ItemConfiguracao } from '../components/misc/ItemConfiguracao'
import { ToggleSwitch } from '../components/misc/ToggleSwitch'
import { TbShieldLock, TbEye, TbMail, TbMessage } from 'react-icons/tb'

export function ConfigPrivacidade(){

    const [perfilPublico, setPerfilPublico] = useState(true)
    const [mostrarEmail, setMostrarEmail] = useState(false)
    const [permitirMensagens, setPermitirMensagens] = useState(true)

    return (
        <section className={styles.secaoCard} aria-labelledby="titulo-privacidade">
            <div className={styles.tituloSecao}>
                <TbShieldLock size={28} />
                <div>
                    <h2 id="titulo-privacidade">Privacidade</h2>
                    <p>Controle quem pode ver as suas informações.</p>
                </div>
            </div>

            <ItemConfiguracao icon={TbEye} titulo="Perfil público" descricao="Qualquer pessoa pode ver o seu perfil.">
                <ToggleSwitch ativo={perfilPublico} onChange={() => setPerfilPublico(v => !v)} label="Perfil público" />
            </ItemConfiguracao>

            <ItemConfiguracao icon={TbMail} titulo="Mostrar e-mail no perfil" descricao="Exibe seu e-mail para outras usuárias.">
                <ToggleSwitch ativo={mostrarEmail} onChange={() => setMostrarEmail(v => !v)} label="Mostrar e-mail no perfil" />
            </ItemConfiguracao>

            <ItemConfiguracao icon={TbMessage} titulo="Permitir mensagens" descricao="Outras usuárias podem te enviar mensagens diretas.">
                <ToggleSwitch ativo={permitirMensagens} onChange={() => setPermitirMensagens(v => !v)} label="Permitir mensagens diretas" />
            </ItemConfiguracao>
        </section>
    )
}