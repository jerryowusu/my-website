import { IconType } from "react-icons"

export interface IServices {
    title: string
    about: string
    Icon: IconType
}

export interface ISkill {
    name: string
    level: string
    Icon: IconType
}

export interface IProject {
    id: number,
    name: string,
    description: string,
    image_url: string,
    deployed_url: string, 
    github_link: string,
    category: Category[],
    tech_stacks: string[],
}

export type Category = 'HTML/CSS' | 'TypeScript/JS' | 'React/NextJs' | 'Ruby/Rails'