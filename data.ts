import { RiComputerLine } from 'react-icons/ri'
import { IServices, ISkill } from './type'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'

const services: IServices[] = [
   {
     Icon: RiComputerLine,
    title: 'Front-end Dev',
    about: 'I can build a beautiful and scalable SPA and websites using <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React</b>, <b>NextJs</b>, etc',
},
{
    Icon: FaServer,
    title: 'Back-end Dev',
    about: 'I can create the back-end using <b>Ruby</b>, <b>Ruby on Rails</b>, <b>NodeJs</b>, <b>Express</b>, and <b>Postgresql</b> among others'
},
{
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'i can develop robust REST API using <b>NodeJs</b> and <b>Ruby on Rails</b> and other frameworks of your choice',
},
{
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about: 'I can also design and build softwares and websites based on any design and specification',
},
];

export const languages: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: 'JavaScript',
        level: '83%',
    },
    {
        Icon: BsCircleFill,
        name: 'NodeJs/Express',
        level: '57%',
    },
    {
        Icon: BsCircleFill,
        name: 'React',
        level: '70%',
    },
    {
        Icon: BsCircleFill,
        name: 'NextJs',
        level: '70%',
    },
    {
        Icon: BsCircleFill,
        name: 'Ruby',
        level: '60%',
    },
    {
        Icon: BsCircleFill,
        name: 'Ruby on Rails',
        level: '69%',
    },
    {
        Icon: BsCircleFill,
        name: 'Tailwind CSS',
        level: '72%',
    },
    {
        Icon: BsCircleFill,
        name: 'Bootstrap',
        level: '79%',
    },
    {
        Icon: BsCircleFill,
        name: 'Python',
        level: '40%',
    }
]

export const tools: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: 'Figma',
        level: '83%',
    },
    {
        Icon: BsCircleFill,
        name: 'VS Code',
        level: '89%',
    },
    
    {
        Icon: BsCircleFill,
        name: 'GitHub',
        level: '90%',
    },
    {
        Icon: BsCircleFill,
        name: 'PhotoShop',
        level: '49%',
    },
    {
        Icon: BsCircleFill,
        name: 'Google',
        level: '96%',
    }
]

export default services;