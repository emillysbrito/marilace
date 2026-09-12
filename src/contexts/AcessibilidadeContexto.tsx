import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

//opções de tamanho de fonte disponíveis
export type TamanhoFonte = 'normal' | 'grande' | 'extra-grande'

//configurações de acessibilidade disponíveis
interface AcessibilidadeConfig {
    tamanhoFonte: TamanhoFonte
    altoContraste: boolean
    reduzirMovimento: boolean
    leituraFacilitada: boolean
    sublinharLinks: boolean
    indicadorFoco: boolean
}

//pega todas as chaves do AcessibilidadeConfig, exceto tamanhoFonte (só aceita chaves booleanas)
type ChaveBooleana = Exclude<keyof AcessibilidadeConfig, 'tamanhoFonte'>

interface AcessibilidadeContextoTipo extends AcessibilidadeConfig { //extends = tem tudo que está no AcessibilidadeConfig
    //funções que os componentes vão usar para alterar as configurações
    definirTamanhoFonte: (tamanho: TamanhoFonte) => void
    alternar: (chave: ChaveBooleana) => void
    restaurarPadrao: () => void
}

//valores padrão de acessibilidade
const CONFIG_PADRAO: AcessibilidadeConfig = {
    tamanhoFonte: 'normal',
    altoContraste: false,
    reduzirMovimento: false,
    leituraFacilitada: false,
    sublinharLinks: false,
    indicadorFoco: false,
}

//chave usada para salvar/ler as configurações no localStorage
const CHAVE_STORAGE = 'marilace_acessibilidade'

//cria o contexto de acessibilidade
const AcessibilidadeContexto = createContext<AcessibilidadeContextoTipo | undefined>(undefined)

//componente que fornece o contexto de acessibilidade para os componentes filhos (ENVOLVER NO APP!!)
export function AcessibilidadeProvider({ children }: { children: ReactNode }) {

    //estado que guarda as configurações de acessibilidade
    const [config, setConfig] = useState<AcessibilidadeConfig>(() => {
        try {
            //tenta recuperar as configurações salvas no localStorage
            const salvo = localStorage.getItem(CHAVE_STORAGE)
            //se tiver algo salvo, retorna as configurações salvas, se não, retorna as configurações padrão
            return salvo ? { ...CONFIG_PADRAO, ...JSON.parse(salvo) } : CONFIG_PADRAO
        } catch {
            //se der algum erro, retorna para as configurações padrão
            return CONFIG_PADRAO
        }
    })

    // aplica as configurações na raiz do documento, vale em qualquer parte do site
    useEffect(() => {
        const raiz = document.documentElement //pega a raiz do documento (é a tag html)

        //adiciona ou remove classes de acordo com as configurações
        raiz.dataset.fontSize = config.tamanhoFonte
        raiz.classList.toggle('alto-contraste', config.altoContraste)
        raiz.classList.toggle('reduzir-movimento', config.reduzirMovimento)
        raiz.classList.toggle('leitura-facilitada', config.leituraFacilitada)
        raiz.classList.toggle('sublinhar-links', config.sublinharLinks)
        raiz.classList.toggle('indicador-foco', config.indicadorFoco)

        localStorage.setItem(CHAVE_STORAGE, JSON.stringify(config))
    }, [config])

    const definirTamanhoFonte = (tamanho: TamanhoFonte) => {
        setConfig((atual) => ({ ...atual, tamanhoFonte: tamanho }))
    }

    const alternar = (chave: ChaveBooleana) => {
        setConfig((atual) => ({ ...atual, [chave]: !atual[chave] }))
    }

    const restaurarPadrao = () => setConfig(CONFIG_PADRAO)

    return (
        <AcessibilidadeContexto.Provider value={{ ...config, definirTamanhoFonte, alternar, restaurarPadrao }}>
            {children}
        </AcessibilidadeContexto.Provider>
    )
}

//hook que permite acessar o contexto de acessibilidade em qualquer componente
export function useAcessibilidade() {
    const contexto = useContext(AcessibilidadeContexto)
    return contexto
}