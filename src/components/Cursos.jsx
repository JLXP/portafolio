import React from 'react';
import { ModalImg } from './imgModal/ImgModal';

export const Cursos = () => {

    const [open, setOpen] = React.useState(false);

    const src = "./src/assets/img/Diplomas/";

    const diplomas = [
        { src: src + "Figma.png" },
        { src: src + "Tailwind.png" },
        { src: src + "Tailwind.png" },
        { src: src + "Tailwind.png" },
        { src: src + "Tailwind.png" },
        { src: src + "Tailwind.png" }
    ];

    function toggleModal() {
        setOpen(!open);
    }

    return (
        <div className="w-full relative px-6">
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-col items-center justify-center my-6">
                    <p className="text-3xl text-white font-bold">Cursos</p>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className=" w-4/5 flex justify-center items-center flex-wrap">
                        {diplomas.map(diploma => (
                            <div className="w-[300px] h-[250px] m-2">
                                <div className="flex justify-center items-center hover:opacity-60 hover:scale-110 duration-500 w-full h-full bg-black rounded-lg relative">
                                    <img className="rounded-lg h-full w-full image-cover" src={diploma.src} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>

    )
}
