import React, { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { IProject } from '../type'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { stagger, fadeInUP } from '../animations';

const ProjectCard: FunctionComponent<{
    project: IProject,
    showDetails: null | number,
    setShowDetails: (id: number | null) => void;
}> = ({
    project: {
        id,
        name,
        description, 
        image_url, 
        deployed_url, 
        github_link, 
        category,
        tech_stacks
    },
    showDetails,
    setShowDetails,
}) => {

  return (
    <div>
        <Image 
        src={image_url} 
        alt={name} 
        className='cursor-pointer' 
        width='300'
        height='150'
        layout='responsive'
        onClick={() => setShowDetails(id)} />
        <p className="my-2 text-center">{name}</p>

        {showDetails === id && (
        <div className="grid md:grid-cols-2 absolute top-0 
        left-0 z-10 w-full h-auto text-black bg-gray-100 p-2 md:p-10 rounded-lg">
            <motion.div 
             variants={stagger} 
             initial="initial"
             animate='animate'
             className='border-4 border-gray-100'
            >
                <motion.div
                variants={fadeInUP}
                >
                    <Image
                    src={image_url} 
                    alt={name} 
                    className='cursor-pointer' 
                    width='300'
                    height='150'
                    layout='responsive'
                    />
                </motion.div>
                <div className='flex justify-center my-4 space-x-3'>
                    <a 
                    href={github_link}
                    className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
                    >
                        <AiFillGithub /> <span>Github</span>
                    </a>
                    <a 
                    href={deployed_url}
                    className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
                    >
                        <AiFillProject /> <span>Project</span>
                    </a>
                </div>
            </motion.div>
        <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.h2 variants={fadeInUP} className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
            <motion.h3 variants={fadeInUP} className='mb-3 font-medium'>{description}</motion.h3>
            <motion.div variants={fadeInUP}v className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                {
                    tech_stacks.map((tech) => (
                        <span key={tech} 
                         className='px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm'
                        >
                            {tech}
                        </span>
                    ))
                }
            </motion.div>
        </motion.div>
        <button onClick={() => setShowDetails(null)}
        className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200'
        >
            <MdClose size={30} />
        </button>
        </div>
        )}
    </div>
  )
}

export default ProjectCard