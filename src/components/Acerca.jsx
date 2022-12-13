import React from 'react'
import { Iconos } from './iconos/iconos'


export const Acerca = () => {
  return (
    <section className="w-full h-full flex justify-center items-center px-6 relative" id="acerca">   
      <div className="w-full flex flex-col md:flex-row  justify-center">
        <div className='hidden lg:w-3/6 lg:flex items-center justify-center'>
          <img src="./assets/img/acerca.jpg" loading='lazy' alt="portada"  />
        </div>
        <div className='w-full lg:w-3/6 lg:px-12 flex items-center'>
          <div className="px-6 flex flex-col lg:absolute lg:left-1/3 lg:mr-10 lg:bg-[#000a12]">
            <span className="text-3xl md:text-5xl font-bold text-gray-500 py-2">Soy un apasionado de la tecnología</span>
            <p className="text-md md:text-lg text-white py-2">Me encanta aprender algo nuevo todos los días ya sea sobre desarrollo web, móvil o todo lo que concierne al cambio tecnológico que sucede en el mundo.
              Constantamente estoy capacitandome con las tecnologías y cursos más actualizados, consulto diferentes plataformas como lo son Udemy y Platzi.
              Mi frase más representativa es que mientras más dificil sea el reto más diverto es el proceso.
            </p>
            <span className='text-2xl font-bold text-gray-500 py-2'>Tecnologías y herramientas que uso:</span>
            <Iconos />
          </div>
        </div>
      </div>
    </section>
  )
}
