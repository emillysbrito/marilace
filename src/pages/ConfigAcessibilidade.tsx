import styles from './Config.module.css'
import { ItemConfiguracao } from '../components/misc/ItemConfiguracao' 
import { ToggleSwitch } from '../components/misc/ToggleSwitch'
import { useAcessibilidade, type TamanhoFonte } from '../contexts/AcessibilidadeContexto'
import {
    TbAccessible,
    TbTextSize,
    TbContrast,
    TbRotate2,
    TbUnderline,
    TbFocus2,
    TbRefresh,
    TbEye,
    TbMoon
} from 'react-icons/tb'

const OPCOES_FONTE: { valor: TamanhoFonte; label: string }[] = [
    { valor: 'normal', label: 'Normal' },
    { valor: 'grande', label: 'Grande' },
    { valor: 'extra-grande', label: 'Extra grande' },
]

export function ConfigAcessibilidade(){

    const {
        tamanhoFonte,
        altoContraste,
        reduzirMovimento,
        leituraFacilitada,
        sublinharLinks,
        indicadorFoco,
        modoEscuro,
        definirTamanhoFonte,
        alternar,
        restaurarPadrao,
    } = useAcessibilidade()

    return (
        <section className={styles.secaoCard} aria-labelledby="titulo-acessibilidade">
            <div className={styles.tituloSecao}>
                <TbAccessible size={28} />
                <div>
                    <h2 id="titulo-acessibilidade">Acessibilidade</h2>
                    <p>Personalize o MariLace do seu jeito! :)</p>
                </div>
            </div>

            <h3 className={styles.categoriaTitulo}>
                <div className={ styles.estrela }/>
                Aparência
            </h3>

            <ItemConfiguracao
                icon={TbMoon}
                titulo="Modo escuro"
                descricao="Usa um tema com fundo escuro, reduzindo o brilho da tela"
            >
                <ToggleSwitch ativo={modoEscuro} onChange={() => alternar('modoEscuro')} label="Ativar modo escuro" />
            </ItemConfiguracao>

            <ItemConfiguracao
                icon={TbContrast}
                titulo="Alto contraste"
                descricao="Aumenta o contraste de cores para facilitar a leitura"
            >
                <ToggleSwitch ativo={altoContraste} onChange={() => alternar('altoContraste')} label="Ativar alto contraste" />
            </ItemConfiguracao>

            <h3 className={styles.categoriaTitulo}>
                <div className={ styles.estrela }/>
                Leitura
            </h3>
            
            <ItemConfiguracao
                icon={TbTextSize}
                titulo="Tamanho do texto"
                descricao="Aumenta o tamanho de todo o texto do site."
            >
                <div className={styles.opcoesFonte} role="radiogroup" aria-label="Tamanho do texto">
                    {OPCOES_FONTE.map(({ valor, label }) => (
                        <button
                            key={valor}
                            type="button"
                            role="radio"
                            aria-checked={tamanhoFonte === valor}
                            className={`${styles.opcaoFonte} ${tamanhoFonte === valor ? styles.opcaoFonteAtiva : ''}`}
                            onClick={() => definirTamanhoFonte(valor)}
                        >
                            <span style={{ fontSize: valor === 'normal' ? '1rem' : valor === 'grande' ? '1.25rem' : '1.5rem' }}>
                                A
                            </span>
                            <span className={styles.opcaoFonteLabel}>{label}</span>
                        </button>
                    ))}
                </div>
            </ItemConfiguracao>

            <ItemConfiguracao
                icon={TbEye}
                titulo="Leitura facilitada"
                descricao="Aumenta o espaçamento entre letras, palavras e linhas"
            >
                <ToggleSwitch ativo={leituraFacilitada} onChange={() => alternar('leituraFacilitada')} label="Ativar leitura facilitada" />
            </ItemConfiguracao>

            <ItemConfiguracao
                icon={TbUnderline}
                titulo="Sublinhar links"
                descricao="Deixa todos os links sublinhados"
            >
                <ToggleSwitch ativo={sublinharLinks} onChange={() => alternar('sublinharLinks')} label="Sublinhar todos os links" />
            </ItemConfiguracao>

            <h3 className={styles.categoriaTitulo}>
                <div className={ styles.estrela }/>
                Movimento e navegação
            </h3>
            <ItemConfiguracao
                icon={TbRotate2}
                titulo="Reduzir animações"
                descricao="Diminui movimentos e transições que podem causar desconforto"
            >
                <ToggleSwitch ativo={reduzirMovimento} onChange={() => alternar('reduzirMovimento')} label="Reduzir animações e movimento" />
            </ItemConfiguracao>

            <ItemConfiguracao
                icon={TbFocus2}
                titulo="Indicador de foco"
                descricao="Destaca o item selecionado ao navegar pelo teclado (Tab)."
            >
                <ToggleSwitch ativo={indicadorFoco} onChange={() => alternar('indicadorFoco')} label="Destacar foco do teclado" />
            </ItemConfiguracao>

            <button className={styles.btnRestaurar} onClick={restaurarPadrao}>
                <TbRefresh size={18} /> Restaurar configurações padrão
            </button>
        </section>
    )
}