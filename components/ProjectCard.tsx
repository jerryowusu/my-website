import React, { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { IProject } from '../type'

const ProjectCard: FunctionComponent<{
    project: IProject
}> = ({
    project: {
        name,
        description, 
        image_url, 
        deployed_url, 
        github_link, 
        category,
        tech_stacks
    }
}) => {

    const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
        <img src={image_url} alt={name} className='cursor-pointer' onClick={() => setShowDetails(true)} />
        <p className="my-2 text-center">{name}</p>

        {showDetails && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 w-full h-auto text-black bg-gray-100">
            <div>
                <img src={image_url} alt={name} />
                <div>
                    <a href={github_link}>
                        <AiFillGithub /> <span>Github</span>
                    </a>
                    <a href={deployed_url}>
                        <AiFillProject /> <span>Project</span>
                    </a>
                </div>
            </div>
        <div>
            {
                tech_stacks.map((tech) => (
                    <div key={tech}>{tech}</div>
                ))
            }
        </div>
        <button onClick={() => setShowDetails(false)}>
            <MdClose size={30} />
        </button>
        </div>
        )}
    </div>
  )
}

export default ProjectCard