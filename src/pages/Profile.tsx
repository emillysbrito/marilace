import styles from './Profile.module.css'
import { HeaderUser } from '../components/headers/HeaderUser'
import { CardSugestoes } from '../components/misc/CardSugestoes'
import { TbMoodConfuzed } from "react-icons/tb";

export function Profile(){
    return (
        <div className={ styles.container }>
            <main className={ styles.profile }>
                <TbMoodConfuzed size={100} className={ styles.icon }/>
                <h1>Nada aqui ainda!</h1>
                <h2>Que tal fazer um post?</h2>
            </main>
        </div>
    )
}