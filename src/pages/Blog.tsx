    import styles from './Blog.module.css'
    import { HeaderAnon } from '../components/HeaderAnon'
    import { FooterAnon } from '../components/FooterAnon'
    import { Chip } from '../components/Chip';
    import { ArtigoBlog } from '../components/ArtigoBlog';
    import { TbChevronRight } from "react-icons/tb";

    import logoComp from '../assets/img/logo-compacta.svg'
    import telefone from '../assets/img/telefone.png'
    import mulherMegafone from '../assets/img/mulhermegafone.png'

    export function Blog(){
        return(
            <div className={ styles.container }>
                <HeaderAnon/>
                <main 
                    className={ styles.destaques } 
                >
                    <h1 className={ styles.tituloDestaques }>
                        Destaques da <span>semana</span>
                        <TbChevronRight size={24} className={ styles.icon } />
                    </h1>

                    <section className={ styles.artigosDestaque }>

                        <article className={ styles.artigo1 }>
                            <img src="https://i.pinimg.com/736x/b1/cd/1b/b1cd1bbd5ad92b9b796b63b23561c1b6.jpg"/>
                            <div className={ styles.containerChip }>
                                <Chip texto='Ciência' cor='var(--verde)'/>
                                <Chip texto='Tecnologia' cor='rgba(112, 69, 146, .8)'/> {/*conversão da cor primaria escura para rgba afim de melhorar a leitura*/}
                                <Chip texto='Engenharia' cor='var(--primaria)' />
                                <Chip texto='Matemática' cor='var(--rosa)'/>
                            </div>
                            <span>Lorem ipsum dolor sit amet.</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, amet officia. Voluptatem cumque nobis eius harum, rerum voluptatum culpa suscipit dolore deserunt, ratione provident perferendis nemo, necessitatibus maxime. Inventore minima accusantium amet magni natus officiis pariatur sed eos, rem itaque!</p>
                        </article>

                        <article className={ styles.artigo2 }>
                            <img src="https://substackcdn.com/image/fetch/$s_!WIB3!,f_auto,q_auto:good,fl_progressive:steep/https://substack-post-media.s3.amazonaws.com/public/images/ddfd7799-748b-49fa-911d-7fc2856e48ac_670x830.jpeg"/>
                            <div className={ styles.conteudoArtigo }>
                                <div className={ styles.containerChip }>
                                    <Chip texto='Ciência' cor='var(--verde)'/>
                                    <Chip texto='Tecnologia' cor='rgba(112, 69, 146, .8)'/>
                                    <Chip texto='Engenharia' cor='var(--primaria)' />
                                </div>
                                <span>Lorem ipsum dolor sit amet.</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, amet officia. Voluptatem cumque nobis eius harum, rerum voluptatum culpa suscipit dolore deserunt, ratione provident perferendis nemo, necessitatibus maxime. Inventore minima accusantium amet magni natus officiis pariatur sed eos, rem itaque!</p>
                            </div>
                        </article>

                        <article className={ styles.artigo3 }>
                            <img src="https://i.pinimg.com/originals/06/3f/91/063f91a7e8ad06571952b9010dd4377e.jpg" />
                            <div className={ styles.conteudoArtigo }>
                                <div className={ styles.containerChip }>
                                    <Chip texto='Ciência' cor='var(--verde)'/>
                                    <Chip texto='Tecnologia' cor='rgba(112, 69, 146, .8)'/>
                                    <Chip texto='Matemática' cor='var(--rosa)'/>
                                </div>
                                <span>Lorem ipsum dolor sit amet.</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deserunt reprehenderit iure atque eius. Vero placeat libero temporibus velit laboriosam.</p>
                            </div>
                        </article>

                    </section>

                </main>

                <div className={ styles.divisoria }>
                    <img src={ logoComp } />
                </div>

                <div className={ styles.artigos }>

                    <div className={ styles.flexArtigos }>
                        <img
                            src={ mulherMegafone } 
                            className={ styles.imgMegafone }
                            alt="Ilustração em preto e branco de uma mulher com vestido longo falando em um megafone grande"
                        />

                        <div className={ styles.headingArtigos }>

                            <div className={ styles.tituloArtigos }>
                                <h2>NOSSOS</h2>
                                <span>artigos:</span>
                            </div>

                            <img src={ telefone } className={ styles.imgTelefone} />

                            <section className={ styles.categoria }>
                                <h2 className={ styles.tituloCategoria }>QUESTÕES DE GÊNERO</h2>
                                <div className={ styles.artigosCategoria }>
                                    <ArtigoBlog
                                    src='https://i.imgur.com/77ClU5Z.png'
                                    titulo='Lorem ipsum dolor sit amet'
                                    descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                                    />
                                    <ArtigoBlog
                                    src='https://i.imgur.com/oUp1Sjx.png'
                                    titulo='Lorem ipsum dolor sit amet'
                                    descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                                    />
                                    <ArtigoBlog
                                    src='https://i.imgur.com/wU1Mq6b.png'
                                    titulo='Lorem ipsum dolor sit amet'
                                    descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                                    />
                                </div>
                                
                            </section>
                        </div>
                    </div>

                    <section className={ styles.categoria }>
                        <h2 className={ styles.tituloCategoria }>CIÊNCIAS</h2>
                        <div className={ styles.artigosCategoria }>
                            <ArtigoBlog
                            src='https://i.imgur.com/77ClU5Z.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                            <ArtigoBlog
                            src='https://i.imgur.com/oUp1Sjx.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                            <ArtigoBlog
                            src='https://i.imgur.com/wU1Mq6b.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                            <ArtigoBlog
                            src='https://i.imgur.com/8i4YSj0.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                        </div>
                    </section>

                    <section className={ styles.categoria }>
                        <h2 className={ styles.tituloCategoria }>TECNOLOGIA</h2>
                        <div className={ styles.artigosCategoria }>
                            <ArtigoBlog
                            src='https://i.imgur.com/77ClU5Z.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                            <ArtigoBlog
                            src='https://i.imgur.com/oUp1Sjx.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                            <ArtigoBlog
                            src='https://i.imgur.com/wU1Mq6b.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                            <ArtigoBlog
                            src='https://i.imgur.com/8i4YSj0.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                        </div>
                    </section>

                    <section className={ styles.categoria }>
                        <h2 className={ styles.tituloCategoria }>ENGENHARIA</h2>
                        <div className={ styles.artigosCategoria }>
                            <ArtigoBlog
                            src='https://i.imgur.com/77ClU5Z.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                            <ArtigoBlog
                            src='https://i.imgur.com/oUp1Sjx.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                            <ArtigoBlog
                            src='https://i.imgur.com/wU1Mq6b.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                            <ArtigoBlog
                            src='https://i.imgur.com/8i4YSj0.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                        </div>
                    </section>

                    <section className={ styles.categoria }>
                        <h2 className={ styles.tituloCategoria }>MATEMÁTICA</h2>
                        <div className={ styles.artigosCategoria }>
                            <ArtigoBlog
                            src='https://i.imgur.com/77ClU5Z.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                            <ArtigoBlog
                            src='https://i.imgur.com/oUp1Sjx.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                            <ArtigoBlog
                            src='https://i.imgur.com/wU1Mq6b.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                            <ArtigoBlog
                            src='https://i.imgur.com/8i4YSj0.png'
                            titulo='Lorem ipsum dolor sit amet'
                            descricao='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            />
                        </div>
                    </section>
                </div>
                <FooterAnon/>
            </div>
        )
    }