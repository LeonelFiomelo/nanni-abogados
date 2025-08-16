import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Education {
    title: string,
    list: string[]
}

const createEducation = (): Education => ({
    title: '',
    list: []
})

interface Experience {
    title: string,
    list: string[]
}

const createExperience = (): Experience => ({
    title: '',
    list: []
})

export interface Member {
    id: number,
    name: string,
    lastName: string,
    formatName: string,
    gender: string,
    profession: string,
    education: Education,
    experience: Experience,
    image: StaticImport | string
}

export const createMember = (): Member => ({
    id: 0,
    name: '',
    lastName: '',
    formatName: '',
    gender: '',
    profession: '',
    education: createEducation(),
    experience: createExperience(),
    image: ''
})