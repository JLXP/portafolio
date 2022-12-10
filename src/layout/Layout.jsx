import React from 'react';
import { Acerca } from '../components/Acerca';
import { Contacto } from '../components/Contacto';
import { Cursos } from '../components/Cursos';
import { Footer } from '../components/Footer';
import { Home } from '../components/Home';
import { Portafolio } from '../components/Portafolio';

export const Layout = () => {
  return (
    <div class="w-screen h-screen" >
        <Home/>
        <Acerca/>
        <Portafolio/>
        <Cursos/>
        <Contacto/>
        <Footer/>
    </div>
  )
}
