import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectsNavbar from '../components/ProjectsNavbar'
import { projects as projectsData} from '../data'
import { Category } from '../type'
import { motion } from 'framer-motion';
import { stagger, fadeInUP } from '../animations'

const Projects = () => {

  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('All')

  const handleFilteredCategory = (category: Category | 'All') => {
    if(category === 'All') {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const filteredCategory = projectsData.filter((project) => project.category.includes(category));
    setProjects(filteredCategory);
    setActive(category);
  }

  return (
    <div className='px-5 py-2 overflow-y-scroll' style={{ height: '65vh' }} >
      <ProjectsNavbar 
      handleFilteredCategory={handleFilteredCategory} 
      active={active}
      />
      <motion.div 
       variants={stagger}
       initial="initial"
       animate='animate'
      className='grid grid-cols-12 gap-4 my-3 relative'>
        {projects.map((project) => (
            <motion.div 
            variants={fadeInUP}
            className='col-span-12 sm:col-span-6 lg:col-span-4 p-2 rounded-lg bg-gray-200 dark:bg-dark-200' key={project.name}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
      </motion.div>
    </div>
  )
}

export default Projects