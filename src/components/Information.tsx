import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
    text: string;
    alt: string;
    src: StaticImport
}

export default function Information({text, alt, src}: Props) {
    return (
        <article>
            <div>
                <Image alt={alt} src={src} className="w-14 h-14" />
            </div>
        </article>
    )
}