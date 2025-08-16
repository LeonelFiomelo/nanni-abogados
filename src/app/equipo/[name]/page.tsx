import Image from "next/image";
import { teamTexts } from "../../../constants/texts";
import { MemberCard, ButtonWhatsApp, NavbarTeam } from "../../../components";

export default async function Page({params}: {params: {name: string}}) {
    
    const { name: paramName } = params;

    const { victor, matias, lucas, carolina, } = teamTexts;
    
    const team = [victor, matias, lucas, carolina];

    const member = team.find(member => member.formatName === paramName.toLocaleString());

    return (
        <section className="relative flex flex-col justify-between w-full min-h-screen">
            <NavbarTeam />
            <ButtonWhatsApp phoneNumber="5492215225458" message="Hola, quiero comunicarme con ustedes." />
            <article className="relative flex flex-col justify-between w-full md:max-w-6xl max-w-sm min-h-screen mx-auto gap-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grow flex flex-col items-center gap-6 col-span-1">
                        {
                            member?.image && <Image alt={`Foto de ${member.name} ${member.lastName}`} src={member.image} className="w-64 rounded-md bg-gray-400/50" />
                        }
                    </div>
                    <div className="space-y-4 col-span-1 md:col-span-2 mt-6 md:mt-0">
                        <p className="text-4xl font-semibold text-[#A18042]">{member?.name} {member?.lastName}</p>
                        <p className="text-lg">{member?.profession}</p>
                        <p className="text-2xl">{member?.education.title}</p>
                        <ul className="space-y-3">
                            {
                                member?.education.list.map((item, index) => (<li key={index} className="text-lg font-light">• {item}</li>))
                            }
                        </ul>
                        <p className="text-2xl">{member?.experience.title}</p>
                        <ul className="space-y-3">
                            {
                                member?.experience.list.map((item, index) => (<li key={index} className="text-lg font-light">• {item}</li>))
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center w-full gap-10 md:gap-24 mx-auto mt-8">
                    {
                        team.map(item => (
                            item.formatName !== paramName && (
                                <MemberCard key={item.id} member={item} reverse={true}/>
                            )
                        ))
                    }
                </div>
            </article>
        </section>
    )
}

export async function generateStaticParams() {
    return [
        { name: 'victor-hugo-nanni' },
        { name: 'matias-nanni' },
        { name: 'lucas-nanni' },
        { name: 'carolina-llamazares' },
    ];
}