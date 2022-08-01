import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'
import {motion } from 'framer-motion';
import { fadeInUP, routeAnimation } from '../animations'

const resume = () => {
    
   return (
    <motion.div 
    className='px-6 py-2'
    variants={routeAnimation}
    initial='initial'
    animate='animate'
    exit='exit'

    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
         variants={fadeInUP}
         initial="initial"
         animate="animate"
         >
        <h5 className='my-3 text-2xl font-bold'>Education</h5>
        <div>
          <h5 className='my-2 text-xl font-bold'>BSc Computer Science </h5>
          <p className='font-semibold'>Amity University (2020 - 2023)</p>
          <p className='my-3'> I am currently pursuing a Bachelor of Computer Science degree at Amity University after undergoing a rigorous and intensive one-year full-stack web development training at Microverse.</p>
        </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
         variants={fadeInUP}
         initial="initial"
         animate="animate">
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
        <div>
          <h5 className='my-2 text-xl font-bold'> Complete Farmer </h5>
          <p className='font-semibold'>Junior Software Engineer (2021 - present)</p>
          <p className='my-3'> ...creating the company website with nextJs, react and nodejs</p>
        </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2"> 
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
          <div className="my-2">
            {
              languages.map(language => <Bar data={language} key={language.name} />)
            }
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
          <div className="my-2">
            {
              tools.map(tool => <Bar data={tool} key={tool.name} />)
            }
          </div>
        </div>
     </div>
    </motion.div>
  )
}

export default resume