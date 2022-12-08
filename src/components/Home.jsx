import React from 'react';
import Typewriter from 'typewriter-effect';

export const Home = () => {
    return (

        <div className="w-full h-3/4 md:h-full relative" id="home">
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 top-48 lg:top-0  lg:justify-center lg:items-start">
                    <div className="h-auto lg:w-3/5 lg:flex pb-6">
                        <div className="flex flex-col">
                            <p className="text-xl md:text-3xl ml-0 md:ml-16 font-bold text-white">¡Hola! mi nombre es </p>
                            <p className=" text-6xl md:text-8xl ml-0 md:ml-16 font-bold text-white py-6">Javier Xool </p>
                            <div className="flex flex-col md:flex-row">
                                <p className="text-xl md:text-3xl ml-0 md:ml-16  font-bold text-white">Diseño y construyo:</p>
                                <p className="text-md md:text-3xl  ml-0 md:ml-2 font-bold text-white">
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
                </div>
                <div className="w-full h-full lg:bg-portada bg-cover lg:bg-center">
                    <img className="h-full lg:hidden" src="./src/assets/img/portadamovil.jpg" />
                </div>
            </div>
        </div>
    )
}
