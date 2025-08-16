'use client'
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { formatName } from "../common/functions";
import { homeTexts, legalServicesTexts, teamTexts } from "../constants/texts";
import { InformationCard, Separator, MemberCard, ButtonWhatsApp, NavbarHome } from "../components";
import { LogoLarge, ImageOffice, ImageOurTeam, ImageOurHistory, ImageOurPhilosophy, ImageCard, ImageContactUs, 
  IconWhatsapp, IconEmail, IconWeb, ImageDerechoAdministrativo, ImageDerechoCivil, ImageDerechoFamilia, 
  ImageDerechoLaboral, ImageDerechoPenal, ImageDerechoSucesorio, ImageCatedral, ImageCatedralSmall,
} from "../../public";

export default function Home() {

  const router = useRouter();

  function onClick(name: string, lastName: string) {
    const fullName = name + ' ' + lastName
    router.push(`/equipo/${formatName(fullName)}`)
  }

  useEffect(() => {

    const scrollTarget = sessionStorage.getItem('scrollTarget')

    if (scrollTarget) {
      sessionStorage.removeItem('scrollTarget')
      const element = document.getElementById(scrollTarget)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    
  }, [])

  return (
    <main className="relative flex flex-col items-center grow overflow-hidden">
      <NavbarHome />
      <ButtonWhatsApp phoneNumber="5492215225458" message="Hola, quiero comunicarme con ustedes." />
      <section className="relative flex flex-col justify-center items-center max-h-screen w-full overflow-visible min-h-svh">
        <div className="inset-0 absolute md:bg-catedralLarge bg-catedralSmall bg-cover brightness-[0.45] filter grayscale animate-reveal-top-to-bottom-smoothest transform -scale-x-100"></div>
        <Image src={LogoLarge} alt="Logo Grande Nanni Abogados" className="absolute w-full z-20 opacity-0 max-w-xs md:max-w-lg md:mt-0 brightness-125 animate-reveal-left-to-right-smoothest" />
      </section>
      <section className="relative flex flex-col gap-10 h-full mt-20">
        <Separator />
        <InformationCard src={ImageOffice} title="Quienes Somos" text={homeTexts.presentation} />
      </section>
      <section className="flex flex-col gap-10 h-full mt-20">
        <Separator />
        <InformationCard src={ImageOurHistory} title="Nuestra Historia" text={homeTexts.history} reverse={true}/>
      </section>
      <section className="flex flex-col gap-10 mt-20" id="ourServices">
        <Separator />
        <article className="relative flex flex-col w-full max-w-md md:max-w-4xl text-center gap-6">
            <p className="text-4xl text-[#A18042]">{legalServicesTexts.title}</p>
            <p className="text-xl">{legalServicesTexts.subTitle}</p>
        </article>
        <article className="flex flex-col justify-center items-center gap-20">
            <InformationCard src={ImageDerechoAdministrativo} title={legalServicesTexts.derechoAdministrativo.title} text={legalServicesTexts.derechoAdministrativo.text}/>
            <InformationCard src={ImageDerechoCivil} title={legalServicesTexts.derechoCivil.title} text={legalServicesTexts.derechoCivil.text} reverse={true}/>
            <InformationCard src={ImageDerechoFamilia} title={legalServicesTexts.derechoFamilia.title} text={legalServicesTexts.derechoFamilia.text} />
            <InformationCard src={ImageDerechoLaboral} title={legalServicesTexts.derechoLaboral.title} text={legalServicesTexts.derechoLaboral.text} reverse={true}/>
            <InformationCard src={ImageDerechoPenal} title={legalServicesTexts.derechoPenal.title} text={legalServicesTexts.derechoPenal.text} />
            <InformationCard src={ImageDerechoSucesorio} title={legalServicesTexts.derechoSucesorio.title} text={legalServicesTexts.derechoSucesorio.text} reverse={true}/>
        </article>
        <p className="text-xl text-center mt-10 max-w-sm md:max-w-4xl m-auto">{legalServicesTexts.footer}</p>
      </section>
      <section className="flex flex-col items-center gap-10 h-full mt-20" id="ourTeam">
        <Separator />
        <InformationCard src={ImageOurTeam} title="Nuestro Equipo" text={homeTexts.team} />
        <article className="grid grid-cols-4 justify-between w-full max-w-4xl gap-16 mt-10">
          <div className="flex justify-center md:justify-start col-span-4 md:col-span-1">
            <MemberCard member={teamTexts.victor} reverse={true}/>
          </div>
          <div className="flex justify-center md:justify-end col-span-4 md:col-span-1">
            <MemberCard member={teamTexts.matias} reverse={true}/>
          </div>
          <div className="flex justify-center md:justify-end col-span-4 md:col-span-1">
            <MemberCard member={teamTexts.lucas} reverse={true}/>
          </div>
          <div className="flex justify-center md:justify-start col-span-4 md:col-span-1">
            <MemberCard member={teamTexts.carolina} reverse={true}/>
          </div>
        </article>
      </section>
      <section className="flex flex-col gap-10 h-full mt-20">
        <Separator />
        <InformationCard src={ImageOurPhilosophy} title="Nuestra Filosofía" text={homeTexts.philosophy}  reverse={true}/>
      </section>
      <section className="flex flex-col justify-center items-center gap-10 h-full mb-8 mt-20" id="contactUs">
        <Separator />
        <InformationCard src={ImageContactUs} title="Contáctenos" text={homeTexts.contact}/>
        <div className="relative max-w-sm md:max-w-4xl w-full">
          <Image src={ImageCard} alt="Logo Grande Nanni Abogados" className="w-full drop-shadow-gold max-w-sm md:max-w-4xl mt-12" />
          <div className="absolute flex flex-col gap-3 md:gap-8 bottom-[16px] md:bottom-[20px] left-[16px] md:left-[34px]">
              <div className="flex items-center gap-2">
                  <Image alt="Icono de Whatsapp" src={IconWhatsapp} className="md:w-10 w-4 brightness-125"/>
                  <p className="text-sm md:text-2xl">2215225458</p>
              </div>
              <div className="flex items-center gap-2">
                  <Image alt="Icono un Sobre" src={IconEmail} className="md:w-10 w-4 brightness-125"/>
                  <p className="text-sm md:text-2xl">nanni.abogados@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                  <Image alt="Icono una Web" src={IconWeb} className="md:w-10 w-4 brightness-125"/>
                  <p className="text-sm md:text-2xl">www.nanniabogados.com.ar</p>
              </div>
          </div>
        </div>
      </section>
      {/* <section className="w-full mb-8">
        <FormContactUs contactUsDTO={contactUsDTO} setContactUsDTO={setContactUsDTO} onSubmit={onSubmit} />
      </section> */}
    </main>
  );
}
