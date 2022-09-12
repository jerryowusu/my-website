import React from 'react'
import { NextPage } from 'next'
import ServiceCard from '../components/ServiceCard';
import services from '../data';
import { motion } from 'framer-motion';
import { fadeInUP, routeAnimation } from '../animations'
import { stagger } from '../animations';

const About: NextPage = () => {

  return (
  <motion.div 
  className='flex flex-col px-6 pt-1 flex-grow'
  variants={routeAnimation}
  initial='initial'
  animate='animate'
  exit='exit'
  >
    <h5 className='my-3 font-medium'>I am a dynamic and proficient Full-stack software engineer with highly developed skills in problem identification and the implementation of effective solutions. I successfully combined studies with work and other equally important commitments, proving to be self-motivated, very organized, and working under pressure. Fluent in multiple languages, frameworks, and technologies.Able to work effectively on independent projects and collaborate as part of a productive team.</h5>
    <h5>I am currently looking for job opportunities that will help me grow and become one of the best Software Engineers. Have exciting projects to work on? Contact me at jerryowusu6133@gmail.com, let us make the world a better place.</h5>
    <div    
    className='flex-grow p-4 mt-5 bg-gray-400  dark:bg-dark-500' 
    style={{marginLeft: '-1.5rem', marginRight:'-1.5rem'}}>
      <h4 className='my-3 text-xl font-bold tracking-wide' >what I do </h4>
      <motion.div 
       variants={stagger}
       initial="initial"
       animate='animate'
      className='grid gap-6 my-3 md:grid-cols-2'>
        {
          services.map(service => (
            <motion.div 
            variants={fadeInUP}
            className='col-span-2 bg-gray-200 dark:bg-dark-200 rounded-lg md:col-span-1'
            key={service.title}>
              <ServiceCard service={service} />
            </motion.div>
        ))
        }
      </motion.div>
    </div>
  </motion.div>
)
}

export default About
