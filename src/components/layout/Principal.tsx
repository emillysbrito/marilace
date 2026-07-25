import styles from './Principal.module.css'
import { Menu } from './Menu'
import { HeaderUser } from '../headers/HeaderUser'
import { Outlet } from 'react-router-dom'

export function Principal(){
    return(
        <div className={ styles.principal }>
            <HeaderUser/>
            <div className={ styles.gridContainer }>
                <Menu/>
                <Outlet />
            </div>
        </div>
    )
}