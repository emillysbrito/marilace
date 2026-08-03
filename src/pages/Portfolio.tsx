import styles from './Portfolio.module.css'
import { TbPlus } from "react-icons/tb";

export function Portfolio(){
    return (
        <main className={ styles.container }>
            <section className={ styles.currículo }>
                <div className={ styles.headerCurriculo}>
                    <h1>Currículo</h1>
                    <button className={ styles.btnNovo }>
                        <TbPlus size={20} className={ styles.btnNovoIcon }/>
                    </button>
                </div>
            </section>

            <section className={ styles.experiencias }>
                <div className={ styles.headerExperiencias}>
                    <h1>Experiências</h1>
                    <button className={ styles.btnNovo }>
                        <TbPlus size={20} className={ styles.btnNovoIcon }/>
                    </button>
                </div>
            </section>

            <section className={ styles.projetos }>
                <div className={ styles.headerProjeto}>
                    <h1>Projetos</h1>
                    <button className={ styles.btnNovo }>
                        <TbPlus size={20} className={ styles.btnNovoIcon }/>
                    </button>
                </div>
            </section>
        </main>
    )
}