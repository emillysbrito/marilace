import styles from './SobrePerfil.module.css'
import { useOutletContext } from 'react-router-dom'
import { EMBLEMAS_DISPONIVEIS } from '../types/Emblemas'
import { ChipClicavel } from '../components/misc/ChipClicavel'

interface PerfilContext {
    emblemasAtivos: string[];
    toggleEmblema: (id: string) => void;
}

export function SobrePerfil(){

    const { emblemasAtivos, toggleEmblema } = useOutletContext<PerfilContext>();

    return (
        <div className={styles.container}>
            <h3>Áreas de interesse</h3>
            <div className={styles.listaChips}>
                {EMBLEMAS_DISPONIVEIS.map((emblema) => (
                <ChipClicavel
                    key={emblema.id}
                    texto={emblema.texto}
                    cor={emblema.cor}
                    selecionado={emblemasAtivos.includes(emblema.id)}
                    onClick={() => toggleEmblema(emblema.id)}
                />
                ))}
            </div>
        </div>
    )
}