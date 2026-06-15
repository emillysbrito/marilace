import styles from './About.module.css'
import { HeaderAnon } from '../components/HeaderAnon'
import { FooterAnon } from '../components/FooterAnon'

import listrado from '../assets/img/listrado.svg'

export function About(){
    return(
        <div className={ styles.container }>
        <HeaderAnon/>
        <main className={ styles.main }>
            <div className={ styles.textoMain }>
                <div className={ styles.chipSobre}>
                    <div className={ styles.estrelaChip }/>
                    <h3 className={styles.textoChip}>SOBRE</h3>
                    <div className={ styles.estrelaChip }/> 
                </div>
                <h2 className={ styles.subtituloMain }>CONHEÇA NOSSA</h2>
                <h1 className={ styles.tituloMain }>história</h1>
                <div className={ styles.brilhoMain }/>
                <div className={ styles.florMain }/>

            </div>
            <div className={ styles.moldura }>
                <div className={ styles.estrelaMoldura1 }/>
                <img src="https://i.pinimg.com/736x/21/a2/10/21a2101bdb2ed16e10ec4641797dc15a.jpg" className={ styles.imgMoldura } />
                <div className={ styles.estrelaMoldura2 }/>
            </div>
            <img src={listrado} className={ styles.fundoMain }/>
        </main>
        <FooterAnon/>
    </div>
    )
}