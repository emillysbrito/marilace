import styles from './PerfilLayout.module.css'
import { HeaderUser } from '../headers/HeaderUser'
import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CardSugestoes } from '../misc/CardSugestoes'
import { TbUser, TbLink, TbUserEdit } from 'react-icons/tb'
import { EMBLEMAS_DISPONIVEIS } from '../../types/Emblemas'
import { useAutenticacao } from '../../hooks/useAutenticacao'

export function PerfilLayout(){
    const { usuario } = useAutenticacao()

    const location = useLocation()

    const [emblemasAtivos, setEmblemasAtivos] = useState<string[]>([]);

    function toggleEmblema(id: string) {
        setEmblemasAtivos((atuais) =>
        atuais.includes(id)
            ? atuais.filter((emblemaId) => emblemaId !== id)
            : [...atuais, id]
        );
    }


    return(
        <div className={ styles.perfilLayout }>
            <HeaderUser/>
            
            <main className={ styles.mainPerfil }>
                <div className={ styles.headerPerfil }>
                    <img src="https://i.imgur.com/6vAOHB9.png" className={ styles.fundo } />

                    <div className={ styles.avatarSeguidores}>
                        <TbUser size={ 96 } className={ styles.avatar }/>

                        <div className={ styles.seguidores }>
                            <p><span>0</span> seguidores</p>
                            <div className={ styles.separador }/>
                            <p><span>0</span> seguindo</p>
                        </div>

                    </div>

                    <div className={ styles.infoPerfil }>

                        <div className={ styles.mainInfo}>
                            <div className={styles.nomeEmblemas}>
                                <h1>{usuario?.email}</h1>
                                <div className={ styles.emblemas }>
                                    {EMBLEMAS_DISPONIVEIS
                                    .filter((emblema) => emblemasAtivos.includes(emblema.id))
                                    .map((emblema) => (
                                        <span
                                        key={emblema.id}
                                        className={ styles.emblema }
                                        style={{ color: emblema.cor }}
                                        title={emblema.texto}
                                        >
                                        {emblema.letra}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h2>@user</h2>
                        </div>

                        <div className={ styles.bio }>
                            <p>Boas-vindas!</p>
                            <button className={ styles.btnLinks }>
                                <TbLink /> Ver links
                            </button>
                            <button className={ styles.btnEditar }>
                                <TbUserEdit size={22} className={ styles.iconEditar } /> Editar perfil
                            </button>
                        </div>

                    </div>

                    <nav className={ styles.navPerfil }>
                        <Link 
                        to='/profile'
                        className={ styles.item }
                        style={{
                        color: location.pathname === '/profile'
                            ? 'var(--primaria-escura)'
                            : 'var(--primaria)'
                        }}>
                            Postagens
                        </Link>

                        <Link 
                        to='portfolio'
                        className={ styles.item }
                        style={{
                        color: location.pathname === '/profile/portfolio'
                            ? 'var(--primaria-escura)'
                            : 'var(--primaria)'
                        }}>
                            Portfólio
                        </Link>

                        <Link 
                        to='sobre'
                        className={ styles.item }
                        style={{
                        color: location.pathname === '/profile/sobre'
                            ? 'var(--primaria-escura)'
                            : 'var(--primaria)'
                        }}>
                            Sobre
                        </Link>
                    </nav>

                    <Outlet context={{ emblemasAtivos, toggleEmblema }} />

                </div>
                <CardSugestoes />
            </main>
        </div>
    )
}