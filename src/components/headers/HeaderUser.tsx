import styles from './HeaderUser.module.css'
import logo from '../../assets/logo.svg'
import { TbSearch, TbUser, TbCaretDown } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Dropdown } from '../modais/Dropdown';
import { useAutenticacao } from '../../hooks/useAutenticacao';

export function HeaderUser(){

    const { usuario } = useAutenticacao()

    const [dropdownAberto, setDropdownAberto] = useState(false)
        
    const exibirDropdown = () => {
        setDropdownAberto(true)
    }

    const ocultarDropdown = () => {
        setDropdownAberto(false)
    }

    return(
    <header className={ styles.container }>
        <Link to='/forum'>
            <img src={ logo } className={ styles.logo } />
        </Link>

        <div className={ styles.barraPesquisa}>
            <input type="text" placeholder='Pesquisar...' className={ styles.pesquisa } />
            <button className={ styles.btnPesquisa}>
                <TbSearch size={18} className={ styles.icon } />
            </button>
        </div>

        <div className={ styles.dropdown }>
            <Link
            to={usuario ? `/${usuario.username}` : '/'}
            className={ styles.btnPerfil}
            >
                <TbUser size={18}/>
            </Link>
            <button
                className={styles.btnDropdown}
                onClick={exibirDropdown}
            >
                <TbCaretDown
                    size={18}
                    className={styles.icon}
                />
            </button>
            <Dropdown
                exibir={dropdownAberto}
                ocultar={ocultarDropdown}
            />
        </div>

    </header>
    )
}