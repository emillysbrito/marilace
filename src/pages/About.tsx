import styles from './About.module.css'
import ReactPlayer from 'react-player'
import { HeaderAnon } from '../components/HeaderAnon'
import { FooterAnon } from '../components/FooterAnon'
import { CardWomen } from '../components/CardWomen'
import { Chip } from '../components/Chip'
import { LinkRede } from '../components/LinkRede'
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin } from "react-icons/tb";

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
            <div className={ styles.conteudoHistoria }>
                <div className={ styles.tituloHistoria }>
                    <h2 className={ styles.tituloHistoria1 }>COMO SURGIU</h2>
                    <h2 className={ styles.tituloHistoria2 }>o <span>marilace?</span></h2>
                </div>
                <p>&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet,  mauris vitae mollis scelerisque, nulla ante malesuada nunc, in ultrices  sapien elit egestas nulla. Nulla elementum lacus eget sapien venenatis,  eget facilisis ligula consectetur. Donec in nulla nec ligula tristique  laoreet quis et nisi. Duis sed metus in odio sagittis pellentesque in  nec ligula. Nam in lorem lobortis, efficitur ipsum non, semper eros.  Nunc sed tellus iaculis, ultricies risus et, mattis nisi. Maecenas sed  turpis mollis, rhoncus urna eu, euismod metus. Maecenas malesuada luctus justo, in blandit elit molestie vitae.<br/>
                &emsp;Suspendisse vestibulum, urna non pellentesque condimentum, est justo  cursus dui, id sollicitudin lectus nunc quis felis. Morbi ultricies sit  amet augue non molestie. Integer vestibulum dui orci, quis venenatis  erat viverra semper. Nunc blandit, ante sed tempus congue, ligula libero viverra metus, dignissim semper orci eros condimentum lacus. Sed  venenatis tempor ante et rutrum.</p>
                </div>
        </section>

        <div className={ styles.quadriculado }></div>

        <section className={ styles.objetivos }>
            <div className={ styles.tituloObjetivos }>
                <h2 className={ styles.tituloObjetivos1 }>
                    QUAL O NOSSO
                </h2>
                <h2 className={ styles.tituloObjetivos2 }>
                    <div className={ styles.pontilhado }/> objetivo?
                </h2>
                <div className={ styles.brilhoObjetivos }/>
            </div>
            
            <div className={ styles.conteudoObjetvos }>
                <ReactPlayer src='https://www.youtube.com/watch?v=BqYByiaAwL0'
                style={{ width: '60%', height: 'auto', aspectRatio: '16/9' }} className={ styles.player} />
            </div>
        </section>

        <div className={ styles.linhaCards }/>

        <section className={ styles.cards }>
            <CardWomen 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/960px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg'
                nome='Grace Hooper'
                idade='(1906 - 1992)'
                profissao='Almirante e analista de sistemas'
            />

            <CardWomen 
                src='https://www.brasildefato.com.br/wp-content/uploads/2024/09/image_processing20200201-29235-1xqup4t.jpg'
                nome='Margaret Hamilton'
                idade='(1906 - 1992)'
                profissao='Cientista da computação e engenheira'
            />

            <CardWomen 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/960px-Katherine_Johnson_1983.jpg'
                nome='Katherine Johnson'
                idade='(1918 - 2020)'
                profissao='Matemática, física e cientista espacial'
            />

            <CardWomen 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhcCn53Mgm4nf6XZrdwowwL58Wdb-NuH7xJgd4uZ0FFDrxZepbkAevzvseCld0fue3kwBlYqusS3-0LNgQZ6NUcrxNl6FP4v_aSu2SGs&s=10'
                nome='Emily Roebling'
                idade='(1843 - 1903)'
                profissao='Engenheira civil'
            />
        </section>

        <div className={ styles.linhaCards }/>

        <section className={ styles.equipe }>

            <div className={ styles.tituloEquipe }>
                <h2 className={ styles.tituloEquipe1 }>NOSSA</h2>
                <h2 className={ styles.tituloEquipe2 }>equipe</h2>
                <div className={ styles.brilhoEquipe }/>
            </div>

            <article className={ styles.ana }>

                <div className={ styles.conteudoAna }>

                    <div className={ styles.tituloAna}>
                        <h3 className={ styles.nome }>Ana</h3>
                        <div className={ styles.sub }>
                            <Chip texto='Dev Back-end' cor='var(--rosa)'/>
                            <h3 className={ styles.sobrenome }>Clara</h3>
                        </div>
                        <div className={ styles.estrelaAna }/>
                    </div>

                    <div className={ styles.links }>
                        <LinkRede 
                            href='https://github.com/sfclara'
                            cor='var(--primaria-escura)'
                            icon={ TbBrandGithub }
                            texto='sfclara'
                        />
                        <LinkRede 
                            href='https://www.linkedin.com/'
                            cor='var(--primaria)'
                            icon={ TbBrandLinkedin }
                            texto='anaclara'
                        />
                        <LinkRede 
                            href='https://www.instagram.com/fclaraana_/'
                            cor='var(--rosa)'
                            icon={ TbBrandInstagram }
                            texto='fclaraana_'
                        />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet,  mauris vitae mollis scelerisque, nulla ante malesuada nunc, in ultrices  sapien elit egestas nulla. Nulla elementum lacus eget sapien venenatis,  eget facilisis ligula consectetur. Donec in nulla nec ligula tristique  laoreet quis et nisi. Duis sed metus in odio sagittis pellentesque in  nec ligula. Nam in lorem lobortis, efficitur ipsum non, semper eros.  Nunc sed tellus iaculis, ultricies risus et, mattis nisi. Maecenas sed  turpis mollis, rhoncus urna eu, euismod metus. Maecenas malesuada luctus justo, in blandit elit molestie vitae.</p>
                </div>

                <div className={ styles.molduraAna }>
                    <img src="https://i.pinimg.com/736x/e4/3a/41/e43a41f149cbbe28eb0a584654637363.jpg" className={ styles.imgAna} />
                    <p className={ styles.asciiAna }>⠀⠀⠀⢈⣁⠆⡀⠀⠀⠀⠀⣄⠀⠀<br />
                        ⠀⠀⠀⢳⢹⠁⠀⠱⡀⠀⠀⢈⠆⠀<br />
                        ⠀⠀⠀⠠⢾⣆⠀⠞⠁⠀⣠⠮⡤⡀<br />
                        ⠀⠀⠀⠀⠐⠹⢦⡀⠀⠰⠁⡀⢰⡁<br />
                        ⠀⠀⠀⢔⠞⠛⠶⣟⣦⣀⠀⠀⠛⠀<br />
                        ⠀⠀⠀⠌⣤⡴⠀⠀⠀⠉⠳⡰⡡⠄<br />
                        ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠹⡄⠀<br />
                        ⠀⠀⠀⠀⠀⠀⠀⠀⡇⢄⠙⢀⢷⢁<br />
                        ⠀⠀⠀⠀⣀⣄⡀⠀⠑⠀⠀⠊⣸⢰<br />
                        ⠀⠀⠀⡔⠁⠠⠗⠀⠀⠀⠀⠀⡭⠄<br />
                        ⠀⠀⠀⢣⠀⠀⠲⣄⣀⣀⢤⡾⠁⠀<br />
                        ⠀⠀⠀⠀⠑⠢⠀⠀⢠⣴⣟⠍⠀⠀<br />
                        ⠐⠄⠄⠤⢐⡢⣀⡼⡾⠋⠀⠀⠀⠀<br />
                        ⠀⠀⢀⠔⣡⣞⠏⠀⠀⠀⠀⠀⠀⠀<br />
                        ⠀⠔⢡⠞⠁⡎⠀⠔⠒⡄⠀⠀⠀⠀<br />
                        ⡎⢰⠃⠀⠀⡗⠄⠁⣀⠆⠀⠀⠀⠀<br />
                        ⠀⠁⢀⠃⠀⠣⡀⠀⠀⠀⠀⣥⠀⠱<br />
                        ⠀⠀⡂⢧⡀⠐⢌⣀⠀⠀⢀⡠⢠⢀<br />
                        ⠀⠀⠂⠀⠁⠀⠀⢐⠩⣏⣋⡸⠗⠊<br />
                        ⠀⠀⠀⠀⠀⠈⠉⡆⢡⠀⠀⠀⠀⠀<br />
                        ⠀⠀⠀⠀⠑⠤⠔⠁⣸⠀⠀⠀⠀⠀
                    </p>

                </div>

                
            </article>

            <article className={ styles.emilly }>

                <div className={ styles.conteudoEmilly }>

                    <div className={ styles.tituloEmilly }>
                        <h3 className={ styles.nome }>Emilly</h3>
                        <div className={ styles.sub }>
                            <Chip texto='Dev Front-end' cor='var(--rosa)'/>
                            <h3 className={ styles.sobrenome }>Brito</h3>
                        </div>
                        <div className={ styles.estrelaEmilly }/>
                    </div>

                    <div className={ styles.links }>
                        <LinkRede 
                            href='https://github.com/emillysbrito'
                            cor='var(--primaria-escura)'
                            icon={ TbBrandGithub }
                            texto='emillysbrito'
                        />
                        <LinkRede 
                            href='https://https://www.linkedin.com/in/emillydesousabrito/'
                            cor='var(--primaria)'
                            icon={ TbBrandLinkedin }
                            texto='emillydesousabrito'
                        />
                        <LinkRede 
                            href='https://www.instagram.com/esbluet/'
                            cor='var(--rosa)'
                            icon={ TbBrandInstagram }
                            texto='esbluet'
                        />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet,  mauris vitae mollis scelerisque, nulla ante malesuada nunc, in ultrices  sapien elit egestas nulla. Nulla elementum lacus eget sapien venenatis,  eget facilisis ligula consectetur. Donec in nulla nec ligula tristique  laoreet quis et nisi. Duis sed metus in odio sagittis pellentesque in  nec ligula. Nam in lorem lobortis, efficitur ipsum non, semper eros.  Nunc sed tellus iaculis, ultricies risus et, mattis nisi. Maecenas sed  turpis mollis, rhoncus urna eu, euismod metus. Maecenas malesuada luctus justo, in blandit elit molestie vitae.</p>
                </div>

                <div className={ styles.molduraEmilly }>
                    <img src="https://i.pinimg.com/736x/8f/ef/2b/8fef2bb31cf0d4b419638b57ff4c47b3.jpg" className={ styles.imgEmilly } />
                    <p className={ styles.asciiEmilly }>⠀⠀⠀⢈⣁⠆⡀⠀⠀⠀⠀⣄⠀⠀<br />
                        ⠀⠀⠀⢳⢹⠁⠀⠱⡀⠀⠀⢈⠆⠀<br />
                        ⠀⠀⠀⠠⢾⣆⠀⠞⠁⠀⣠⠮⡤⡀<br />
                        ⠀⠀⠀⠀⠐⠹⢦⡀⠀⠰⠁⡀⢰⡁<br />
                        ⠀⠀⠀⢔⠞⠛⠶⣟⣦⣀⠀⠀⠛⠀<br />
                        ⠀⠀⠀⠌⣤⡴⠀⠀⠀⠉⠳⡰⡡⠄<br />
                        ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠹⡄⠀<br />
                        ⠀⠀⠀⠀⠀⠀⠀⠀⡇⢄⠙⢀⢷⢁<br />
                        ⠀⠀⠀⠀⣀⣄⡀⠀⠑⠀⠀⠊⣸⢰<br />
                        ⠀⠀⠀⡔⠁⠠⠗⠀⠀⠀⠀⠀⡭⠄<br />
                        ⠀⠀⠀⢣⠀⠀⠲⣄⣀⣀⢤⡾⠁⠀<br />
                        ⠀⠀⠀⠀⠑⠢⠀⠀⢠⣴⣟⠍⠀⠀<br />
                        ⠐⠄⠄⠤⢐⡢⣀⡼⡾⠋⠀⠀⠀⠀<br />
                        ⠀⠀⢀⠔⣡⣞⠏⠀⠀⠀⠀⠀⠀⠀<br />
                        ⠀⠔⢡⠞⠁⡎⠀⠔⠒⡄⠀⠀⠀⠀<br />
                        ⡎⢰⠃⠀⠀⡗⠄⠁⣀⠆⠀⠀⠀⠀<br />
                        ⠀⠁⢀⠃⠀⠣⡀⠀⠀⠀⠀⣥⠀⠱<br />
                        ⠀⠀⡂⢧⡀⠐⢌⣀⠀⠀⢀⡠⢠⢀<br />
                        ⠀⠀⠂⠀⠁⠀⠀⢐⠩⣏⣋⡸⠗⠊<br />
                        ⠀⠀⠀⠀⠀⠈⠉⡆⢡⠀⠀⠀⠀⠀<br />
                        ⠀⠀⠀⠀⠑⠤⠔⠁⣸⠀⠀⠀⠀⠀
                    </p>

                </div>

                
            </article>

            <article className={ styles.fernanda }>

                <div className={ styles.conteudoFernanda }>

                    <div className={ styles.tituloFernanda}>
                        <h3 className={ styles.nome }>Fernanda</h3>
                        <div className={ styles.sub }>
                            <Chip texto='Banco de Dados' cor='var(--rosa)'/>
                            <h3 className={ styles.sobrenome }>Leal</h3>
                        </div>
                        <div className={ styles.estrelaFernanda }/>
                    </div>

                    <div className={ styles.links }>
                        <LinkRede 
                            href='https://github.com/fernandaleals'
                            cor='var(--primaria-escura)'
                            icon={ TbBrandGithub }
                            texto='fernandaleals'
                        />
                        <LinkRede 
                            href='https://www.linkedin.com/'
                            cor='var(--primaria)'
                            icon={ TbBrandLinkedin }
                            texto='fernandaleal'
                        />
                        <LinkRede 
                            href='https://https://www.instagram.com/nandalealz/'
                            cor='var(--rosa)'
                            icon={ TbBrandInstagram }
                            texto='nandalealz'
                        />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet,  mauris vitae mollis scelerisque, nulla ante malesuada nunc, in ultrices  sapien elit egestas nulla. Nulla elementum lacus eget sapien venenatis,  eget facilisis ligula consectetur. Donec in nulla nec ligula tristique  laoreet quis et nisi. Duis sed metus in odio sagittis pellentesque in  nec ligula. Nam in lorem lobortis, efficitur ipsum non, semper eros.  Nunc sed tellus iaculis, ultricies risus et, mattis nisi. Maecenas sed  turpis mollis, rhoncus urna eu, euismod metus. Maecenas malesuada luctus justo, in blandit elit molestie vitae.</p>
                </div>

                <div className={ styles.molduraFernanda }>
                    <img src="https://i.pinimg.com/1200x/2e/b1/ca/2eb1cabc77e388e6ad66e2910770e42b.jpg" className={ styles.imgFernanda} />
                    <p className={ styles.asciiFernanda }>⠀⠀⠀⢈⣁⠆⡀⠀⠀⠀⠀⣄⠀⠀<br />
                        ⠀⠀⠀⢳⢹⠁⠀⠱⡀⠀⠀⢈⠆⠀<br />
                        ⠀⠀⠀⠠⢾⣆⠀⠞⠁⠀⣠⠮⡤⡀<br />
                        ⠀⠀⠀⠀⠐⠹⢦⡀⠀⠰⠁⡀⢰⡁<br />
                        ⠀⠀⠀⢔⠞⠛⠶⣟⣦⣀⠀⠀⠛⠀<br />
                        ⠀⠀⠀⠌⣤⡴⠀⠀⠀⠉⠳⡰⡡⠄<br />
                        ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠹⡄⠀<br />
                        ⠀⠀⠀⠀⠀⠀⠀⠀⡇⢄⠙⢀⢷⢁<br />
                        ⠀⠀⠀⠀⣀⣄⡀⠀⠑⠀⠀⠊⣸⢰<br />
                        ⠀⠀⠀⡔⠁⠠⠗⠀⠀⠀⠀⠀⡭⠄<br />
                        ⠀⠀⠀⢣⠀⠀⠲⣄⣀⣀⢤⡾⠁⠀<br />
                        ⠀⠀⠀⠀⠑⠢⠀⠀⢠⣴⣟⠍⠀⠀<br />
                        ⠐⠄⠄⠤⢐⡢⣀⡼⡾⠋⠀⠀⠀⠀<br />
                        ⠀⠀⢀⠔⣡⣞⠏⠀⠀⠀⠀⠀⠀⠀<br />
                        ⠀⠔⢡⠞⠁⡎⠀⠔⠒⡄⠀⠀⠀⠀<br />
                        ⡎⢰⠃⠀⠀⡗⠄⠁⣀⠆⠀⠀⠀⠀<br />
                        ⠀⠁⢀⠃⠀⠣⡀⠀⠀⠀⠀⣥⠀⠱<br />
                        ⠀⠀⡂⢧⡀⠐⢌⣀⠀⠀⢀⡠⢠⢀<br />
                        ⠀⠀⠂⠀⠁⠀⠀⢐⠩⣏⣋⡸⠗⠊<br />
                        ⠀⠀⠀⠀⠀⠈⠉⡆⢡⠀⠀⠀⠀⠀<br />
                        ⠀⠀⠀⠀⠑⠤⠔⠁⣸⠀⠀⠀⠀⠀
                    </p>

                </div>

                
            </article>

                        <article className={ styles.guilherme }>

                <div className={ styles.conteudoGuilherme }>

                    <div className={ styles.tituloGuilherme }>
                        <h3 className={ styles.nome }>Guilherme</h3>
                        <div className={ styles.sub }>
                            <Chip texto='Banco de Dados' cor='var(--rosa)'/>
                            <h3 className={ styles.sobrenome }>Martins</h3>
                        </div>
                        <div className={ styles.estrelaGuilherme }/>
                    </div>

                    <div className={ styles.links }>
                        <LinkRede 
                            href='https://github.com/GuilhermeMartins2008'
                            cor='var(--primaria-escura)'
                            icon={ TbBrandGithub }
                            texto='GuilhermeMartins2008'
                        />
                        <LinkRede 
                            href='https://https://www.linkedin.com/in/'
                            cor='var(--primaria)'
                            icon={ TbBrandLinkedin }
                            texto='guilhermemartins'
                        />
                        <LinkRede 
                            href='https://www.instagram.com/mart1ns_gui/'
                            cor='var(--rosa)'
                            icon={ TbBrandInstagram }
                            texto='mart1ns_gui'
                        />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet,  mauris vitae mollis scelerisque, nulla ante malesuada nunc, in ultrices  sapien elit egestas nulla. Nulla elementum lacus eget sapien venenatis,  eget facilisis ligula consectetur. Donec in nulla nec ligula tristique  laoreet quis et nisi. Duis sed metus in odio sagittis pellentesque in  nec ligula. Nam in lorem lobortis, efficitur ipsum non, semper eros.  Nunc sed tellus iaculis, ultricies risus et, mattis nisi. Maecenas sed  turpis mollis, rhoncus urna eu, euismod metus. Maecenas malesuada luctus justo, in blandit elit molestie vitae.</p>
                </div>

                <div className={ styles.molduraGuilherme }>
                    <img src="https://i.pinimg.com/736x/e4/63/c3/e463c397d8d0011b15139277bf4c20d0.jpg" className={ styles.imgGuilherme } />
                    <p className={ styles.asciiGuilherme }>⠀⠀⠀⢈⣁⠆⡀⠀⠀⠀⠀⣄⠀⠀<br />
                        ⠀⠀⠀⢳⢹⠁⠀⠱⡀⠀⠀⢈⠆⠀<br />
                        ⠀⠀⠀⠠⢾⣆⠀⠞⠁⠀⣠⠮⡤⡀<br />
                        ⠀⠀⠀⠀⠐⠹⢦⡀⠀⠰⠁⡀⢰⡁<br />
                        ⠀⠀⠀⢔⠞⠛⠶⣟⣦⣀⠀⠀⠛⠀<br />
                        ⠀⠀⠀⠌⣤⡴⠀⠀⠀⠉⠳⡰⡡⠄<br />
                        ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠹⡄⠀<br />
                        ⠀⠀⠀⠀⠀⠀⠀⠀⡇⢄⠙⢀⢷⢁<br />
                        ⠀⠀⠀⠀⣀⣄⡀⠀⠑⠀⠀⠊⣸⢰<br />
                        ⠀⠀⠀⡔⠁⠠⠗⠀⠀⠀⠀⠀⡭⠄<br />
                        ⠀⠀⠀⢣⠀⠀⠲⣄⣀⣀⢤⡾⠁⠀<br />
                        ⠀⠀⠀⠀⠑⠢⠀⠀⢠⣴⣟⠍⠀⠀<br />
                        ⠐⠄⠄⠤⢐⡢⣀⡼⡾⠋⠀⠀⠀⠀<br />
                        ⠀⠀⢀⠔⣡⣞⠏⠀⠀⠀⠀⠀⠀⠀<br />
                        ⠀⠔⢡⠞⠁⡎⠀⠔⠒⡄⠀⠀⠀⠀<br />
                        ⡎⢰⠃⠀⠀⡗⠄⠁⣀⠆⠀⠀⠀⠀<br />
                        ⠀⠁⢀⠃⠀⠣⡀⠀⠀⠀⠀⣥⠀⠱<br />
                        ⠀⠀⡂⢧⡀⠐⢌⣀⠀⠀⢀⡠⢠⢀<br />
                        ⠀⠀⠂⠀⠁⠀⠀⢐⠩⣏⣋⡸⠗⠊<br />
                        ⠀⠀⠀⠀⠀⠈⠉⡆⢡⠀⠀⠀⠀⠀<br />
                        ⠀⠀⠀⠀⠑⠤⠔⠁⣸⠀⠀⠀⠀⠀
                    </p>

                </div>

                
            </article>
        </section>

        <FooterAnon/>
    </div>
    )
}