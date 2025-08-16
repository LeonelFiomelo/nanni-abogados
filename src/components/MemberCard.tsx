import './MemberCard.css';
import Link from 'next/link';
import Image from "next/image";
import { formatName } from '@/common/functions';
import { ImageLine, LogoSmall } from "../../public";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Member {
    id: number;
    name: string;
    lastName: string;
    profession: string;
    education: {
      title: string;
      list: string[];
    };
    experience: {
      title: string;
      list: string[];
    };
    image: StaticImport | string;
}

interface Props {
    member: Member;
    reverse?: boolean;
}

export default function MemberCard({member, reverse}: Props) {

    const { id, name, lastName, profession, education, experience, image } = member;

    const fullName = name + ' ' + lastName

    const route = `/equipo/${formatName(fullName)}`

    return (
        <article
            className={`relative flex flex-col justify-center items-center gap-8 md:gap-5 w-auto rounded-xl overflow-hidden`}
        >
            
            <div className="flex flex-col md:grid grid-rows-2 grid-cols-1 w-full justify-around items-center max-w-sm gap-4 md:gap-2">
                <Image alt={`Imagen de ${name}`} src={image} className={`w-[200px] h-[260px] mx-auto row-span-1 col-span-1 rounded-md bg-gray-400/50 object-cover`} />
                <div className="row-span-1 col-span-1 flex flex-col justify-around items-center h-full gap-4 md:gap-0">
                    <div className="flex md:flex-col flex-row gap-2 md:gap-0">
                        <p className="text-3xl md:text-xl text-center text-[#A18042] tracking-wide">{name}</p>
                        <p className="text-3xl md:text-xl text-center text-[#A18042] tracking-wide">{lastName}</p>
                    </div>
                    <p className="text-lg text-gray-700 text-center">{profession}</p>
                    <div className='relative flex justify-end items-center'>
                        <Link href={route} id="custom-underline-animation" className="text-center text-lg align-middle font-semibold w-24">
                            Ver mas
                        </Link>
                        <span className='absolute font-semibold'>{`>`}</span>
                    </div>
                    <div className='relative flex justify-center items-center'>
                        <Image alt="Logo chico" src={LogoSmall} className="w-10" />
                        <Image alt="Logo chico" src={ImageLine} className="w-6 absolute rotate-[63deg] -left-[38px]" />
                        <Image alt="Logo chico" src={ImageLine} className="w-6 absolute -rotate-[64deg] -right-[38px] transform scale-x-[-1]" />
                    </div>
                </div>
            </div>
        </article>
    )
}