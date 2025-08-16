'use client'
import Image from "next/image";
import { useState } from "react";
import LogoSmall from "../../public/LogoSmall.png";

export default function NavbarHome() {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={`bg-[#100E0F] shadow-sm shadow-black relative w-full z-20`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4 gap-6">
                <Image alt="Logo Nanni Abogados" src={LogoSmall} className="md:w-[58px] w-[38px]" />
                <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-2 gap-6 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <button onClick={() => handleScroll("home")} className='text-white block rounded md:p-0 hover:text-[#d4ae67]' aria-current="page">
                                Inicio
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleScroll("ourServices")} className='text-white block rounded md:p-0 hover:text-[#d4ae67]'>
                                Servicios Juridicos
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleScroll("ourTeam")} className='text-white block rounded md:p-0 hover:text-[#d4ae67]'>
                                Nuestro Equipo
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleScroll("contactUs")} className='text-white block rounded md:p-0 hover:text-[#d4ae67]'>
                                Contáctenos
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
