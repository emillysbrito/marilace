import estilos from './Dropdown.module.css'
import { Link } from 'react-router-dom'
import { TbBell, TbSettings2, TbUser, TbLogout } from 'react-icons/tb'
import { useAutenticacao } from '../../hooks/useAutenticacao'
import { useNavigate } from 'react-router-dom'

interface DropdownProps {
    exibir: boolean
    ocultar: () => void
}

export function Dropdown({
    exibir,
    ocultar
}: DropdownProps) {

    const navegacao = useNavigate()

    const {deslogar} = useAutenticacao()

    const sair = async () => {
        await deslogar()
        navegacao('/')
    }


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
                        to="/notificacoes"
                        className={estilos.item}
                    >
                        <TbBell size={16}/>Notificações
                    </Link>

                    <Link
                        to="/configuracoes"
                        className={estilos.item}
                    >
                        <TbSettings2 size={16}/>Configurações
                    </Link>

                    <button
                        onClick={sair}
                        className={estilos.deslogar}
                    >
                        <TbLogout size={16}/>Sair
                    </button>
                </div>
            </>
        )
    }

    return null
}