import styles from './Construcao.module.css'
import { HeaderUser } from '../components/headers/HeaderUser'
import { Chip } from '../components/misc/Chip';
import { TbTools } from "react-icons/tb";
import { Btn } from '../components/buttons/Btn';

export function Notificacoes(){
    return (
        <div className={ styles.page }>

            <HeaderUser/>

            <main className={ styles.main }>
                <svg className={ styles.linhasFundo } viewBox="0 0 1000 700" preserveAspectRatio="none">
                    <path
                        d="M-50 100 C 150 0, 250 200, 450 100 S 750 0, 1050 120"
                        fill="none"
                        strokeWidth="22"
                    />
                    <path
                        d="M-50 550 C 200 450, 300 650, 550 550 S 850 450, 1050 580"
                        fill="none"
                        strokeWidth="22"
                    />
                </svg>

                <span className={`${ styles.forma } ${ styles.nuvem }`} />
                <span className={`${ styles.forma } ${ styles.estrela1 }`} />
                <span className={`${ styles.forma } ${ styles.estrela2 }`} />
                <span className={`${ styles.forma } ${ styles.blobVerde }`} />

                <div className={ styles.conteudo }>
                    <span className={ styles.etiqueta }><Chip texto='ainda estamos montando essa parte!' cor='var(--rosa)'/></span>

                    <div className={ styles.iconeBlob }>
                        <div className={ styles.circuloPontilhado }>
                            <TbTools className={ styles.icone } />
                        </div>
                    </div>

                    <h1 className={ styles.titulo }>Em construção!</h1>

                    <p className={ styles.descricao }>
                        Parece que algumas engenheiras estão trabalhando aqui...
                    </p>

                    <div className={ styles.botao }>
                        <Btn
                            route='/forum'
                            text='Voltar para o fórum'
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}