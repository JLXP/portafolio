import React from 'react';
import { ModalImg } from './imgModal/ImgModal';

export const Cursos = () => {

    const [open, setOpen] = React.useState(false);
    const [img, setImg] = React.useState();

    const src = "./assets/img/Diplomas/";

    const diplomas = [
        { src: src + "Figma.png" },
        { src: src + "Tailwind.png" }
    ];

    const inputEl = React.useRef();

    function toggleModal(diploma) {
        console.log(inputEl);
        if (inputEl.current.ownerDocument.body.clientWidth < 780) return null;
        if (open) {
            setImg(null)
            document.body.classList.remove('overflow-hidden');
        } else {
            document.body.classList.add('overflow-hidden');
            setImg(diploma);
        }
        setOpen(!open);
    }

    return (
        <section className="w-full  px-6" id="cursos">
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-col items-center justify-center my-6">
                    <p className="text-3xl text-white font-bold">Certificaciones</p>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className=" w-4/5 flex justify-center items-center flex-wrap">
                        {diplomas.map(diploma => (
                            <div className="w-[300px] h-[250px] m-2 cursor-pointer" disabled={false} onClick={() => toggleModal(diploma)} ref={inputEl}>
                                <div className="flex justify-center items-center hover:opacity-60 hover:scale-110 duration-500 w-full h-full bg-black rounded-lg relative">
                                    <img className="rounded-lg h-full w-full image-cover" src={diploma.src} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ModalImg
                imagen={img}
                isOpen={open}
                onToggle={toggleModal}
            />
        </section>
    )
}
