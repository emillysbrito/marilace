import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage.tsx'
import { About } from '../pages/About.tsx'
import { Blog } from '../pages/Blog.tsx'
import { Login } from '../pages/Login.tsx'
import { Registro } from '../pages/Registro.tsx'
import { Forum } from '../pages/Forum.tsx'
import { Profile } from '../pages/Profile.tsx'
import { Principal } from '../components/layout/Principal.tsx'
import { PerfilLayout } from '../components/layout/PerfilLayout.tsx'
import { Chat } from '../pages/Chat.tsx'
import { Oportunidades } from '../pages/Oportunidades.tsx'
import { Salvos } from '../pages/Salvos.tsx'
import { Notificacoes } from '../pages/Notificacoes.tsx'
import { Configuracoes } from '../pages/Configuracoes.tsx'

export function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <LandingPage/> } />
                <Route path='about' element={ <About/> }/>
                <Route path='blog' element={ <Blog/> }/>
                <Route path='login' element={ <Login/> }/>
                <Route path='register' element={ <Registro/> }/>
                <Route path='forum' element={ <Principal/> }>
                    <Route index element={ <Forum/> }/>
                    <Route path='chat' element={ <Chat/> }/>
                    <Route path='oportunidades' element={ <Oportunidades/> }/>
                    <Route path='salvos' element={ <Salvos/> }/>
                </Route>
                <Route path='profile' element={ <PerfilLayout/> }>
                    <Route index element={ <Profile/> }/>
                </Route>
                <Route path='notificacoes' element={ <Notificacoes/> }/>
                <Route path='configuracoes' element={ <Configuracoes/> }/>
            </Routes>
        </BrowserRouter>
    )
}