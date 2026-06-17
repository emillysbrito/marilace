import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage.tsx'
import { About } from '../pages/About.tsx'
import { Blog } from '../pages/Blog.tsx'
import { Login } from '../pages/Login.tsx'
import { Registro } from '../pages/Registro.tsx'
import { Forum } from '../pages/Forum.tsx'

export function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <LandingPage/> } />
                <Route path='about' element={ <About/> }/>
                <Route path='blog' element={ <Blog/> }/>
                <Route path='login' element={ <Login/> }/>
                <Route path='register' element={ <Registro/> }/>
                <Route path='forum' element={ <Forum/> }/>
            </Routes>
        </BrowserRouter>
    )
}