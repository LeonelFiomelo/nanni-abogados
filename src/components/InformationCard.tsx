import Image from "next/image";
import './InformationCard.css'
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface Props {
    title?: string;
    text: string;
    src: StaticImport;
    reverse?: boolean;
}

export default function InformationCard({title, text, src, reverse}: Props) {
    return (
        <section
            // id="informationCard"
            className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} w-full max-w-sm md:max-w-4xl rounded-3xl md:rounded-s-3xl md:rounded-t-3xl bg-gray-300 shadow-2xl shadow-black/80`}
        >
            <Image src={src} alt="Logo Grande Nanni Abogados" className={`w-full max-h-[384px] max-w-sm ration rounded-t-3xl ${reverse ? 'md:rounded-r-3xl md:rounded-tl-none' : 'md:rounded-l-3xl md:rounded-tr-none'}`} />
            <article className="flex flex-col w-full  gap-6 p-6 md:justify-evenly">
                <h4 className="text-4xl text-[#A18042] text-center">{title}</h4>
                <p className="text-lg leading-relaxed">{text}</p>
            </article>
        </section>
    )
}