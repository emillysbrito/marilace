import styles from './ConfigLayout.module.css'
import { HeaderUser } from '../headers/HeaderUser'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { TbAccessible, TbUserCog, TbBell, TbShieldLock, TbHelp } from 'react-icons/tb'

export function ConfigLayout(){

    const location = useLocation()

    return (
        <div className={ styles.page }>
            <HeaderUser/>

            <main className={ styles.main }>
                <div className={ styles.cabecalho }>
                    <h1>
                        Configurações
                    </h1>
                </div>

                <div className={ styles.layout }>
                    <nav
                        className={ styles.navLateral }
                        aria-label="Seções de configurações"
                    >
                        <div className={ styles.mainNav }>
                            <Link
                                className={`${styles.navItem} ${
                                    location.pathname === '/configuracoes/acessibilidade'
                                        ? styles.navItemAtivo
                                        : ''
                                }`}
                                to='acessibilidade'
                                aria-current={
                                    location.pathname === '/configuracoes/acessibilidade'
                                        ? 'page'
                                        : undefined
                                }
                            >
                                <TbAccessible size={26}/>
                                <span>Acessibilidade</span>
                            </Link>

                            <Link
                                className={`${styles.navItem} ${
                                    location.pathname === '/configuracoes/conta'
                                        ? styles.navItemAtivo
                                        : ''
                                }`}
                                to='conta'
                                aria-current={
                                    location.pathname === '/configuracoes/conta'
                                        ? 'page'
                                        : undefined
                                }
                            >
                                <TbUserCog size={26}/>
                                <span>Conta</span>
                            </Link>

                            <Link
                                className={`${styles.navItem} ${
                                    location.pathname === '/configuracoes/notificacoes'
                                        ? styles.navItemAtivo
                                        : ''
                                }`}
                                to='notificacoes'
                                aria-current={
                                    location.pathname === '/configuracoes/notificacoes'
                                        ? 'page'
                                        : undefined
                                }
                            >
                                <TbBell size={26}/>
                                <span>Notificações</span>
                            </Link>

                            <Link
                                className={`${styles.navItem} ${
                                    location.pathname === '/configuracoes/privacidade'
                                        ? styles.navItemAtivo
                                        : ''
                                }`}
                                to='privacidade'
                                aria-current={
                                    location.pathname === '/configuracoes/privacidade'
                                        ? 'page'
                                        : undefined
                                }
                            >
                                <TbShieldLock size={26}/>
                                <span>Privacidade</span>
                            </Link>
                        </div>
                        <Link
                            className={`${styles.navItem} ${
                                location.pathname === '/configuracoes/sobre-o-sistema'
                                    ? styles.navItemAtivo
                                    : ''
                            }`}
                            to='sobre-o-sistema'
                            aria-current={
                                location.pathname === '/configuracoes/sobre-o-sistema'
                                    ? 'page'
                                    : undefined
                            }
                        >
                            <TbHelp size={26}/>
                            <span>Sistema</span>
                        </Link>
                    </nav>

                    <div className={ styles.conteudo }>
                        <Outlet/>
                    </div>
                </div>
            </main>
        </div>
    )
}