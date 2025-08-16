import { Member } from "@/models/entity/Member";
import { ImageMemberVictor, ImageMemberMatias, ImageMemberCarolina, ImageMemberLucas } from "../../public";

export const homeTexts = {
    presentation: `Bienvenidos a nuestro estudio jurídico, un despacho con más de tres décadas de trayectoria en el ámbito legal.
    Fundado en 1990, nuestro estudio se ha consolidado como un referente en el sector, gracias a la combinación de la 
    experiencia de dos generaciones de abogados dedicados y apasionados por el derecho.`,
    history: `Desde sus inicios, nuestro estudio ha sido un pilar de confianza y profesionalismo para nuestros clientes. Con una sólida 
    base establecida por la primera generación de abogados, hemos sabido adaptarnos y evolucionar con los tiempos, integrando nuevas 
    tecnologías y enfoques modernos sin perder de vista los valores y la ética que nos caracterizan.`,
    team: `Nuestro equipo está compuesto por abogados altamente calificados y comprometidos con ofrecer un servicio personalizado y de 
    alta calidad. La sinergia entre la experiencia acumulada por la generación fundadora y la visión fresca e innovadora de la nueva 
    generación nos permite abordar cada caso con una perspectiva integral y estratégica.`,
    philosophy: `Creemos firmemente en la importancia de la justicia y el respeto por el estado de derecho. Nuestra misión es proporcionar 
    asesoramiento jurídico de excelencia, defendiendo los intereses de nuestros clientes con integridad y profesionalismo. Nos esforzamos 
    por construir relaciones duraderas basadas en la confianza, la transparencia y el compromiso con el éxito de nuestros clientes.`,
    contact: `Estamos aquí para ayudarle a resolver sus problemas legales con la máxima eficacia y eficiencia. No dude en ponerse en contacto 
    con nosotros para una consulta y descubrir cómo podemos asistirle en sus necesidades legales.`,
    thank: `Gracias por considerar nuestro estudio jurídico. Esperamos poder servirle y trabajar juntos hacia la mejor resolución de sus 
    asuntos legales.`
}

const victor: Member = {
    id: 1,
    name: `Victor Hugo`,
    lastName: `Nanni`,
    formatName: 'victor-hugo-nanni',
    gender: 'male',
    profession: `Abogado`,
    education: {
        title: `Formación Acedémica`,
        list: ['Graduado en la Universidad Nacional de La Plata en 1989.']
    },
    experience: {
        title: `Experiencia Profesional`,
        list: [
            'Abogado y fundador de Nanni Estudio de Abogados (1990 - actualidad).',
            '31 años de experiencia en derecho docente y derecho penal.',
            'Responsable del Área Legal Gremial de la Federación de Educadores Bonaerenses (FEB).',
            'Técnico Paritario.',
            'Profesor del Instituto Superior de Formación Docente y Técnica de FEB.',
            'Asesor Legal de distintas Instituciones y Colegios Profesionales.',
            'Amplia Experiencia en derecho Administrativo, Laboral y Penal.',
            'Expositor en distintas ediciones de la Feria Internacional del Libro de Buenos Aires.',
            'Expositor permanente en Jornadas de Formación para Docentes de la Pcia. De Buenos Aires para la FEB.'
        ]
    },
    image: ImageMemberVictor
}

const matias: Member = {
    id: 2,
    name: `Matías`,
    lastName: `Nanni`,
    formatName: 'matias-nanni',
    gender: 'male',
    profession: `Abogado`,
    education: {
        title: `Formación Acedémica`,
        list: ['Graduado en la Universidad Nacional de La Plata en 2015.']
    },
    experience: {
        title: `Experiencia Profesional`,
        list: [
            'Abogado en Nanni Estudio de Abogados (2015 - actualidad).',
            'Director de Modernización en la Municipalidad de Berisso (2015 - 2017).',
            'Concejal de la ciudad de Berisso (2017 - actualidad), Presidente del Concejo Deliberante (2018 - 2019).',
            'Matrícula profesional CALP para toda la provincia de Buenos Aires.',
            'Matrícula en la Cámara Federal de Apelaciones de La Plata.'
        ]
    },
    image: ImageMemberMatias
}

const carolina: Member = {
    id: 3,
    name: `Carolina`,
    lastName: `Llamazares`,
    formatName: 'carolina-llamazares',
    gender: 'female',
    profession: `Abogada`,
    education: {
        title: `Formación Acedémica`,
        list: [
            'Graduada en la Universidad Católica de La Plata en 2013.',
            'Clases Magistrales “El juez y su sentencia” (UCALP).',
            'Curso en Resolución Alternativa de Conflictos (UCALP).'
        ]
    },
    experience: {
        title: `Experiencia Profesional`,
        list: [
            'Abogada intermedia en Estudio Jurídico BULLO (2015-2017).',
            'Directora de Familia y Acceso a la Justicia en la Municipalidad de Pinamar (2017-2019).',
            'Subsecretaria de Desarrollo Social en la Municipalidad de Pinamar (2019-2020).',
            'Ejercicio independiente de la profesión, matrícula profesional CALP, CPACF y Matrícula Cámara Federal de Apelaciones de La Plata.'
        ]
    },
    image: ImageMemberCarolina
}

const lucas: Member = {
    id: 4,
    name: `Lucas`,
    lastName: `Nanni`,
    formatName: 'lucas-nanni',
    gender: 'male',
    profession: `Abogado`,
    education: {
        title: `Formación Acedémica`,
        list: [
            'Graduado en la Universidad Nacional de La Plata en 2024.',
        ]
    },
    experience: {
        title: `Experiencia Profesional`,
        list: [
            'Abogado en Nanni Estudio de Abogados (2021 - actualidad).',
        ]
    },
    image: ImageMemberLucas
}

export const teamTexts = {
    title: `Nuestro Equipo`,
    victor: victor,
    matias: matias,
    carolina: carolina,
    lucas: lucas
}

export const legalServicesTexts = {
    title: `Servicios Juridicos`,
    subTitle: `Nos especializamos en una amplia gama de áreas legales, incluyendo`,
    footer: `Cada caso es abordado con dedicación, analizando minuciosamente cada detalle para ofrecer soluciones efectivas y adaptadas 
    a las necesidades particulares de nuestros clientes.`,
    derechoCivil: {
        title: `Derecho Civil`,
        text: ` El Derecho Civil abarca un amplio espectro de relaciones jurídicas entre personas, incluyendo contratos, obligaciones, 
        derechos reales y responsabilidad civil. Nuestro estudio ofrece asesoramiento y representación en todos los aspectos del derecho 
        civil, garantizando la protección de tus derechos e intereses.`
    },
    derechoSucesorio: {
        title: `Derecho Sucesorio`,
        text: `En el ámbito del Derecho Sucesorio, brindamos asesoramiento integral en la planificación de herencias y la tramitación de 
        sucesiones. Nuestro objetivo es asegurar una transmisión patrimonial ordenada y conforme a la voluntad del causante, minimizando 
        conflictos entre los herederos.`
    },
    derechoPenal: {
        title: `Derecho Penal`,
        text: `El Derecho Penal se enfoca en la defensa de personas acusadas de cometer delitos, así como en la asistencia a víctimas y 
        particulares damnificados. En nuestro estudio, ofrecemos una defensa técnica y estratégica en todas las etapas del proceso penal, 
        velando por la protección de los derechos fundamentales de nuestros clientes.`
    },
    derechoAdministrativo: {
        title: `Derecho Administrativo`,
        text: `El Derecho Administrativo regula la relación entre los ciudadanos y la administración pública. Asesoramos en la interposición 
        de recursos administrativos, representación en procedimientos administrativos y contencioso-administrativos, garantizando una defensa 
        eficaz frente a la actuación del Estado.`
    },
    derechoLaboral: {
        title: `Derecho Laboral y Riesgos del Trabajo`,
        text: `En el área de Derecho Laboral y Riesgos del Trabajo, ofrecemos asesoramiento tanto a empleados como a empleadores en la 
        resolución de conflictos laborales, negociación de convenios colectivos, y reclamaciones por accidentes laborales y enfermedades 
        profesionales.`
    },
    derechoFamilia: {
        title: `Derecho de Familia`,
        text: `El Derecho de Familia se ocupa de las relaciones jurídicas entre los miembros de la familia. Nuestro estudio brinda 
        asesoramiento en casos de divorcio, régimen de visitas, alimentos, adopciones y otros temas relacionados, buscando siempre 
        soluciones justas y humanas.`
    }
}

export const footerTexts = {
    phone: `2215225458`,
    email: `nanni.abogados@gmail.com`,
    web: `nanniabogados.com.ar`,
    copyright: `Copyright @NanniAbogados`
}