import React, { FunctionComponent } from 'react'
import { Category } from '../type'

const NavItem: FunctionComponent<{
    value: Category | 'All';
     handleFilteredCategory:Function;
      active:string;
}> = ({ value, handleFilteredCategory, active }) => {

    let className='cursor-pointer hover:text-green'
    if(active === value) className += ' text-green';
    
  return (
    <li 
    className={className}
    onClick={() => handleFilteredCategory(value)}
    >
        {value}
    </li>
  )
}


const ProjectsNavbar: FunctionComponent<{handleFilteredCategory:Function; active:string}> = (props) => {
  return (
    <div className='flex list-none px-3 py-2 space-x-3 overflow-x-auto'>
        <NavItem value='All' {...props}/>
        <NavItem value='HTML/CSS' {...props}/>
        <NavItem value='TypeScript/JS' {...props}/>
        <NavItem value='React/NextJs' {...props}/>
        <NavItem value='Ruby/Rails' {...props}/>

    </div>
  )
}

export default ProjectsNavbar