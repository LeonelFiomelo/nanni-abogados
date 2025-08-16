import Image from "next/image";
import './ComponentesStyles.css';
import { IconWeb, IconEmail, IconWhatsapp, LogoSmall } from "../../public";

export default function Card() {
    return (
        <div className="relative flex flex-col bg-gradient-to-r from-gray-100 via-gray-50 to-white rounded-lg p-4 w-full md:max-w-lg max-w-sm shadow-2xl shadow-black border-l-[2px] border-t-[2px] border-gray-200" id="polygon">
            <div className="flex flex-col gap-2 mb-12">
                <p className="text-5xl tracking-[0.40rem] inline-block">Nanni</p>
                <p className={`text-lg text-[#A18042] brightness-125 inline-block`}>Estudio de Abogados</p>
            </div>
            <div className="flex flex-col justify-end gap-4 h-full">
                <div className="flex items-center gap-2">
                    <Image alt="Icono de Whatsapp" src={IconWhatsapp} className="md:w-8 w-4 brightness-125"/>
                    <p>2215225458</p>
                </div>
                <div className="flex items-center gap-2">
                    <Image alt="Icono un Sobre" src={IconEmail} className="md:w-8 w-4 brightness-125"/>
                    <p>nanni.abogados@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                    <Image alt="Icono una Web" src={IconWeb} className="md:w-8 w-4 brightness-125"/>
                    <p>www.nanniabogados.com.ar</p>
                </div>
            </div>
            <Image alt="Logo" src={LogoSmall} className="absolute md:w-24 w-16 md:bottom-6 md:right-6 bottom-5 right-5 z-10 brightness-125"/>
        </div>
    )
}