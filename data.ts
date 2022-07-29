import { RiComputerLine } from 'react-icons/ri'
import { Iservices } from './type'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'

const services: Iservices[] = [
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

export default services;