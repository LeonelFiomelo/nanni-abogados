import Link from "next/link";
import Image from "next/image";
import { Member } from "../models/entity/Member";

interface Props {
    member: Member;
}

export default function ItemCarousel({member}: Props) {

    const { name, lastName, profession, image, formatName } = member;

    return (
        <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 rounded-lg">
            <Link href={`/equipo/${formatName}`} className="flex flex-col justify-center items-center space-y-4">
                <div className="aspect-w-16 aspect-h-9">
                    <Image
                        className="object-cover shadow-md hover:shadow-xl rounded-lg"
                        src={image}
                        alt={`Foto de ${name} ${lastName}`}
                    />
                </div>
                <div className="px-4 py-2 text-center">
                    <h3 className="font-semibold text-gray-800 text-2xl mb-2">{name} {lastName}</h3>
                    <p className="font-medium text-base text-[#A18042] mt-2">
                        {profession}
                    </p>
                </div>
            </Link>
        </div>
    )
}