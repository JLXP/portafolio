export const NavBar = () => {
    return (
        <nav class="w-full h-14 hidden bg-[red] lg:flex p-4 justify-between fixed z-50 dark:bg-gray-800">
            <div class="h-auto w-auto">
                <p class="text-xl  font-black dark:text-white">Javier Xool</p>
            </div>
            <div class="flex space-x-8">
                <a class="font-bold text-md  dark:text-white" href="#home">Inicio</a>
                <a class="font-bold text-md  dark:text-white" href="#recomendados">Sobre mi</a>
                <a class="font-bold text-md  dark:text-white" href="#rentas_destacadas">Habilidades</a>
                <a class="font-bold text-md  dark:text-white" href="#faqs">Portafolio</a>
                <a class="font-bold text-md dark:text-white" href="#acerca_de">Contacto</a>
            </div>
        </nav>
    )
}
