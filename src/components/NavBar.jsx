import { useState } from "react";
export const NavBar = () => {

    const [open, setOpen] = useState(false);

    let links = [
        { name: "Inicio", link: "/" },
        { name: "Acerca", link: "/" },
        { name: "Portafolio", link: "#faqs" },
        { name: "Cursos", link: "/" },
        { name: "Contacto", link: "/" },
    ];

    return (
        <nav className="shadow-md w-full fixed z-20 top-0 left-0 ">
            <div className="md:flex bg-[#000a12] items-center justify-between py-4 md:px-10 px-7">
                <div className="flex justify-between">
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white'>
                        <svg width="48" height="48" viewBox="0 0 115 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.20354 30.2825L57.5 0.583726L106.796 30.2825V89.7175L57.5 119.416L8.20354 89.7175V30.2825Z" fill="url(#paint0_linear_159_30)" stroke="black" />
                            <path d="M47.4242 65.1719V45.5625H53.7523V65.1719C53.7523 67.0729 53.3227 68.7135 52.4633 70.0938C51.6169 71.4609 50.4646 72.5221 49.0063 73.2773C47.5609 74.0195 45.9268 74.3906 44.1039 74.3906C42.2289 74.3906 40.5622 74.0781 39.1039 73.4531C37.6456 72.8151 36.4997 71.8451 35.6664 70.543C34.8461 69.2279 34.4359 67.5547 34.4359 65.5234H40.8031C40.8031 66.526 40.9268 67.3203 41.1742 67.9062C41.4346 68.4792 41.8122 68.8828 42.307 69.1172C42.8018 69.3516 43.4008 69.4688 44.1039 69.4688C44.781 69.4688 45.3669 69.306 45.8617 68.9805C46.3565 68.6419 46.7406 68.1536 47.0141 67.5156C47.2875 66.8646 47.4242 66.0833 47.4242 65.1719ZM62.6109 45.5625L67.6109 55.25L72.6109 45.5625H79.8766L71.7906 59.6641L80.0914 74H72.7672L67.6109 64.1367L62.4742 74H55.1305L63.4508 59.6641L55.3453 45.5625H62.6109Z" fill="black" />
                            <defs>
                                <linearGradient id="paint0_linear_159_30" x1="57.5" y1="0" x2="57.5" y2="120" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F7F7F7" stop-opacity="0.96" />
                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div onClick={() => setOpen(!open)} className="cursor-pointer md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            className="fill-current text-gray-200"
                            width="30" height="30"
                            viewBox="0 0 30 30">
                            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                        </svg>
                    </div>
                </div>
                <ul class={`md:flex md:items-center bg-[#000a12] md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15' : 'top-[-490px]'}`}>
                    {links.map(link => (
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                            <a href={link.link} className="text-white font-bold hover:text-gray-400 duration-500">{link.name}</a>
                        </li>
                    ))}
                    <a className="bg-[#4f5b62] text-white py-2 px-6 rounded md:ml-8 hover:bg-gray-400 duration-500" href="www.google.com" target="_blank">
                        CV
                    </a>
                </ul>
            </div>
        </nav>
    )
}
