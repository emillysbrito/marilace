import estilos from './Dropdown.module.css'
import { Link } from 'react-router-dom'

import { TbBell, TbSettings2, TbUser, TbLogout } from 'react-icons/tb'

interface DropdownProps {
    exibir: boolean
    ocultar: () => void
}

export function Dropdown({
    exibir,
    ocultar
}: DropdownProps) {

    if (exibir) {
        return (
            <>
                <div
                    className={estilos.overlay}
                    onClick={ocultar}
                />

                <div className={estilos.container}>
                    <Link
                        to="/profile"
                        className={estilos.item}
                    >
                        <TbUser size={16}/>Seu perfil
                    </Link>

                    <Link
                        to="/forum"
                        className={estilos.item}
                    >
                        <TbBell size={16}/>Notificações
                    </Link>

                    <Link
                        to="/forum"
                        className={estilos.item}
                    >
                        <TbSettings2 size={16}/>Configurações
                    </Link>

                    <Link
                        to="/"
                        className={estilos.item}
                    >
                        <TbLogout size={16}/>Sair
                    </Link>
                </div>
            </>
        )
    }

    return null
}