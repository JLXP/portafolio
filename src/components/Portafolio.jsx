import React from 'react'

export const Portafolio = () => {

    let tabs = [
        { name: 'Todos' },
        { name: 'Web' },

    ]

    let portafolio = [
        {
            src: './assets/img/Proyectos/PlatziTravel.png', title: "PlatziTravel", github: "https://github.com/JLXP/Tailwind-PlatziTravel", demo: "https://harmonious-semifreddo-1ba476.netlify.app", tecnology: [
                "html",
                "tailwind"
            ]
        },


    ]

    const [openTab, setOpenTab] = React.useState(1);
    return (
        <section className="w-full h-full flex flex-col px-6 justify-center items-center" id="portafolio">
            <div className='w-full flex flex-col items-center justify-center'>
                <p className="text-2xl text-white font-semibold">Portafolio</p>
                <p className="text-4xl text-white font-bold">Ultimos Proyectos</p>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <ul className="flex list-none flex-wrap pt-4 justify-center" >
                    {tabs.map((tab, index) => (
                        <li className="mr-2 text-center w-[100px] cursor-pointer">
                            <p
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === index + 1
                                        ? "text-white bg-gray-800"
                                        : "text-" + 'red' + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(index + 1);
                                }}

                            >
                                {tab.name}
                            </p>
                        </li>
                    ))}

                </ul>
                <div className={openTab === 1 ? "flex justify-center items-center" : "hidden"}>
                    <div className="flex flex-wrap w-full items-center justify-center">
                        {portafolio.map((proyect, index) => (
                            <div className="flex flex-col items-center justify-center w-[320px] md:w-[380px] bg-[#000a12] m-6 rounded-lg">
                                <div className="pb-4">
                                    <div className="flex justify-center items-center w-full h-72 rounded-lg relative cursor-pointer duration-500">
                                        <img className="rounded-lg h-full w-full image-cover" loading='lazy' src={proyect.src} />
                                    </div>
                                    <div className='flex justify-between p-3'>
                                        <span className="text-2xl text-white font-semibold">{proyect.title}</span>
                                        <div className="flex space-x-4">
                                            <a href={proyect.demo} target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                    className="fill-current text-white hover:text-[#4f5b62] cursor-pointer"
                                                    width="25" height="25"
                                                    viewBox="0 0 50 50">
                                                    <path d="M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 25 12 C 33.859375 12 41.496094 17.324219 45 25 C 41.496094 32.675781 33.859375 38 25 38 C 16.140625 38 8.503906 32.675781 5 25 C 8.503906 17.324219 16.140625 12 25 12 Z M 25 14 C 18.933594 14 14 18.933594 14 25 C 14 31.066406 18.933594 36 25 36 C 31.066406 36 36 31.066406 36 25 C 36 18.933594 31.066406 14 25 14 Z"></path>
                                                </svg>
                                            </a>
                                            <a href={proyect.github} target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                    className="fill-current text-white hover:text-[#4f5b62] cursor-pointer"
                                                    width="25" height="25"
                                                    viewBox="0 0 50 50">
                                                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap p-2">

                                        {proyect.tecnology.map((informacion) => (
                                            informacion === "html" ?
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                    className="hover:scale-110"
                                                    width="35" height="35"
                                                    viewBox="0 0 48 48">
                                                    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                                </svg> :
                                                informacion === "tailwind" ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                        className='hover:scale-110'
                                                        width="35" height="35"
                                                        viewBox="0 0 48 48">
                                                        <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                                                    </svg>:null
                                        ))}


                                    </div>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}
