import { footerTexts } from "../constants/texts";

export default function Footer() {
    return (
        <footer className={`bg-[#100E0F] text-white py-4 text-center w-full font-light`}>
            <p>{footerTexts.copyright}</p>
        </footer>
    )
}