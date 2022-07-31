import { RiComputerLine } from 'react-icons/ri'
import { IProject, IServices, ISkill } from './type'
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

export const projects: IProject[] = [
    {
      name: 'Math Magicians',
      description: 'An educational project for making a React calculator',
      image_url: 'https://user-images.githubusercontent.com/65233860/182036935-ce1fd4bd-5dba-4ac9-a6d0-a206bef85dc6.png',
      deployed_url: 'https://jmath-magicians.herokuapp.com/math-magicians/',
      github_link: 'https://github.com/jerryowusu/math-magicians',
      category: ['React/NextJs'],
      tech_stacks: ['JavaScript', 'HTML/CSS', 'React' ]
    },
    {
        name: 'Covid-19-Tracking-webapp',
        description: 'This is a web application for a project that uses the real COVID-19 data from Narrativa API. It is mobile application for a tracking Covid 19 data globally and for each country. The application allows users select country and find specific data related to that particular country..',
        image_url: 'https://user-images.githubusercontent.com/65233860/163498406-4a16b80b-36a8-4054-9144-d9c6e9c041d2.png',
        deployed_url: 'https://github.com/jerryowusu/covid-19-tracking-webapp',
        github_link: 'https://github.com/jerryowusu/covid-19-tracking-webapp',
        category: ['TypeScript/JS', 'HTML/CSS'],
        tech_stacks: ['React', 'Redux', 'JavaScript', 'HTML/CSS']
      },  
      {
        name: 'My Blog App',
        description: 'Blog app made with Ruby on Rails. User can make posts, comments and likes on posts of other users. Also user can delete posts and comments created by user. User can edit profile and delete account if not happy. For creating posts and comments user must login. Admin can manage all.',
        image_url: '/public/images/math_magicians.png',
        deployed_url: 'https://github.com/jerryowusu/myblogapp',
        github_link: 'https://github.com/jerryowusu/myblogapp',
        category: ['Ruby/Rails'],
        tech_stacks: ['Ruby', 'Rails', 'Postgresql' ]
      },  
    {
        name: 'Web Submit Accra',
        description: 'This project is a website for a motivational web summit that organizes prominent people from around the world to mentor and motivate young ingenious young minds to reach their optimum best potential.',
        image_url: 'https://user-images.githubusercontent.com/65233860/182036885-f2f52049-872d-463f-9cb8-c18d9ff09c19.png',
        deployed_url: 'https://jerryowusu.github.io/Web-Summit-Accra/',
        github_link: 'https://github.com/jerryowusu/Web-Summit-Accra',
        category: ['TypeScript/JS', 'HTML/CSS'],
        tech_stacks: ['JavaScript', 'HTML/CSS']
      },
      {
        name: 'Space Travelers',
        description: 'This is a web application for a company that provides commercial and scientific space travel services. The application will use real live data from the SpaceX API, and it will allow users to book rockets and join selected space missions.',
        image_url: 'https://user-images.githubusercontent.com/20567503/162003030-067de73b-d04e-40ec-a8f8-65e2993db821.png',
        deployed_url: 'https://jerryowusu.github.io/mv-space-travellers/',
        github_link: 'https://github.com/jerryowusu/mv-space-travellers',
        category: ['React/NextJs', 'TypeScript/JS', 'HTML/CSS'],
        tech_stacks: ['React', 'Redux', 'JavaScript', 'HTML/CSS']
      },
      {
        name: 'Recipe App',
        description: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe',
        image_url: '/public/images/websummit.png',
        deployed_url: 'https://github.com/jerryowusu/Recipe-App',
        github_link: 'https://github.com/jerryowusu/Recipe-App',
        category: ['Ruby/Rails'],
        tech_stacks: ['Ruby', 'Rails', 'Postgresql', 'Bootstrap']
      }
]

export default services;