import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { FaAngellist } from 'react-icons/fa';
import { GrDocumentDownload } from 'react-icons/gr';
import React from 'react';

const Sidebar = () => {
  return (
    <div>
        <img src="https://user-images.githubusercontent.com/65233860/181785521-5f215dac-27a6-40cf-aa32-193ad69531af.jpeg" alt="my image" 
        className="w-40 h-40 mx-auto my-4 rounded-full" />
        
        <h5 className='my-4 text-3xl font-medium tracking-wider font-Kaushan'> <span className='text-blue-400' >Jerry</span>  Owusu</h5>
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full' >
            Full-Stack Engineer
        </p>
        <a href=""
            className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'
            download="jerry-owusu-resume.pdf"
            >
            <GrDocumentDownload className='w-6 h-6 mx-3' /> Download Resume
        </a>
        <div className='flex justify-around my-5 text-blue-400 w-12/12' >
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
        <div className='py-4 my-5 bg-gray-200' >
            <div className='flex items-center justify-center space-x-2' >
                <GoLocation className='w-5 h-5'/>
                <span>Accra, Ghana</span>
            </div>
            <p className='my-2'>jerryowusu6133@gmail.com</p>
            <p className='my-2'>+233248045875</p>
        </div>
        <button className='w-7/12 h-12 py-2 my-3 rounded-full bg-gradient-to-r from-blue-400 to-green-300 focus:outline-none' 
        onClick={() => window.open('mailto: jerryowusu6133@gmail.com')}
        >Contact me</button>
        <button className='w-7/12 h-12 py-2 my-3 rounded-full bg-gradient-to-r from-blue-400 to-green-300 ' > Toggle Theme</button>
    </div>
  )
}

export default Sidebar;
