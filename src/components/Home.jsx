import React from 'react';
import Typewriter from 'typewriter-effect';

export const Home = () => {
    return (

        <section className="w-full h-3/4 md:h-full relative" id="home">
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-col absolute items-center justify-center lg:items-start">
                    <div className="flex flex-col">
                        <p className="text-xl md:text-3xl md:ml-16 font-semibold text-white mb-6">¡Hola! mi nombre es</p>
                        <h1 className=" text-6xl md:text-8xl md:ml-16 font-bold text-white">Javier Xool</h1>
                        <p className=" text-md md:text-xl md:ml-16 font-semibold text-white mb-6">Soy Desarrollador Fullstack</p>
                        <div className="flex flex-col md:flex-row">
                            <p className="text-2xl md:ml-16 font-semibold text-white">Diseño y construyo:</p>
                            <p className="text-lg md:text-2xl md:ml-2 font-semibold text-white">
                                <Typewriter
                                    options={{
                                        strings: ['Aplicaciones Web', 'Aplicaciones Móviles'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full bg-cover lg:bg-portada lg:bg-center">
                    <img className="h-full w-full lg:hidden" loading='lazy' src="./assets/img/portadamovil.jpg" alt="portada" />
                </div>
            </div>
        </section>
    )
}
