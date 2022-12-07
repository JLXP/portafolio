import React from 'react';

export const Cursos = () => {

    const [open, setOpen] = React.useState(false);

    const src = "./src/assets/img/Diplomas/";

    const diplomas = [
        { src: src + "Figma.png" },
        { src: src + "Tailwind.png" }
    ];

    function toggleModal() {
        setOpen(!open);
    }

    return (

        <div className="flex flex-wrap lg:py-24 px-6 justify-center space-y-6">
            <div className='w-full lg:w-1/3  h-24 flex flex-col items-center justify-center bg-[#4f5b62] rounded-lg'>
                <p className="text-4xl text-white font-bold">Cursos</p>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div >
                                <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 space-y-10 md:space-y-0 lg:space-y-0 md:gap-10 ">
                                    {diplomas.map(diploma => (
                                        <div className="flex flex-col w-full">
                                            <div className="flex justify-center items-center hover:opacity-60 hover:scale-110 duration-500 w-full h-[360px] lg:h-[420px] bg-black rounded-lg relative">
                                                <img className="rounded-lg h-full w-full image-cover" src={diploma.src} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
