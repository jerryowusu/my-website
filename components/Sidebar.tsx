import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { FaAngellist } from 'react-icons/fa';
import { GrDocumentDownload } from 'react-icons/gr';
import { useTheme } from 'next-themes';
// import React from 'react';


const Sidebar = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log('dark theme is here to stay')
    }

  return (
    <div>
        <img src="https://user-images.githubusercontent.com/65233860/181785521-5f215dac-27a6-40cf-aa32-193ad69531af.jpeg" alt="my image" 
        className="w-40 h-40 mx-auto my-4 rounded-full " />
        
        <h5 className='my-4 text-3xl font-medium tracking-wider font-Kaushan'> <span className='text-green' >Jerry</span>  Owusu</h5>
        <p className='px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 dark:bg-black-500 rounded-full' >
            Full-Stack Engineer
        </p>
        <a href="/assets/jerry-owusu resume.pdf"
            className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full'
            download="jerry-owusu-resume.pdf"
            >
            <GrDocumentDownload className='w-6 h-6 mx-3' /> Download Resume
        </a>
        <div className='flex justify-around my-5 text-green w-12/12' >
            <a href="https://github.com/jerryowusu">
                <AiFillGithub className='w-8 h-8' />
            </a>
            <a href="https://www.linkedin.com/in/jerry-owusu">
                <AiFillLinkedin className='w-8 h-8' />
            </a>
            <a href="https://angel.co/u/jerry-owusu1">
                <FaAngellist className='w-8 h-8' />
            </a>
        </div>
        <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500' 
            style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
            <div className='flex items-center justify-center space-x-2' >
                <GoLocation className='w-5 h-5'/>
                <span>Accra, Ghana</span>
            </div>
            <p className='my-2'>jerryowusu6133@gmail.com</p>
            <p className='my-2'>+233248045875</p>
        </div>
        <button className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-500 focus:outline-none' 
        onClick={() => window.open('mailto: jerryowusu6133@gmail.com')}
        >Contact me</button>
        <button 
        onClick={changeTheme}
        className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-500 ' >
         Toggle Theme
         </button>
    </div>
  )
}

export default Sidebar;
