import styles from './About.module.css'
import { HeaderAnon } from '../components/HeaderAnon'
import { FooterAnon } from '../components/FooterAnon'

import listrado from '../assets/img/listrado.svg'
import ada from '../assets/img/adaLovelace.png'

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
                <h1 className={ styles.subtituloMain }>CONHEÇA NOSSA</h1>
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
        <section className={ styles.historia }>
            <img src={ ada } />
            <div className={ styles.conteudoHistoria}>
                <div className={ styles.tituloHistoria}>
                    <h2 className={ styles.comoSurgiu}>COMO SURGIU</h2>
                    <h2 className={ styles.oMarilace}>o <span>marilace?</span></h2>
                </div>
                <p>&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet,  mauris vitae mollis scelerisque, nulla ante malesuada nunc, in ultrices  sapien elit egestas nulla. Nulla elementum lacus eget sapien venenatis,  eget facilisis ligula consectetur. Donec in nulla nec ligula tristique  laoreet quis et nisi. Duis sed metus in odio sagittis pellentesque in  nec ligula. Nam in lorem lobortis, efficitur ipsum non, semper eros.  Nunc sed tellus iaculis, ultricies risus et, mattis nisi. Maecenas sed  turpis mollis, rhoncus urna eu, euismod metus. Maecenas malesuada luctus justo, in blandit elit molestie vitae.<br/>
                &emsp;Suspendisse vestibulum, urna non pellentesque condimentum, est justo  cursus dui, id sollicitudin lectus nunc quis felis. Morbi ultricies sit  amet augue non molestie. Integer vestibulum dui orci, quis venenatis  erat viverra semper. Nunc blandit, ante sed tempus congue, ligula libero viverra metus, dignissim semper orci eros condimentum lacus. Sed  venenatis tempor ante et rutrum.</p>
                </div>
        </section>
        <div className={ styles.quadriculado }></div>
        <FooterAnon/>
    </div>
    )
}