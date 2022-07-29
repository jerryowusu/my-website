import React, { FunctionComponent, useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from '../node_modules/next/router';

const NavItem: FunctionComponent<{
    activeItem: string;
    setActiveItem: Function
    name: string;
    route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
    return activeItem !== name ? (
        <Link href={route}>
            <a>
                <span onClick={() => setActiveItem(name)}>{name}</span>
            </a>
        </Link>
    ) : null
}

const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('');

    const { pathname } = useRouter();

    useEffect(() => {
        if (pathname === '/') setActiveItem('About');
        if (pathname === '/') setActiveItem('Projects');
        if (pathname === '/') setActiveItem('Resume');
     },[]);

  return (
    <div className='flex justify-between px-5 py-3 mx-3 my-6' >
        <span className='text-xl font-bold text-green-500 border-b-4 border-green-500'>
            {activeItem}
        </span>
        <div className='flex space-x-3 text-blue-500 border-b-4 font-lg'>
          <NavItem 
            activeItem={activeItem} 
            setActiveItem={setActiveItem} 
            name='About' 
            route='/' 
          /> 
          <NavItem 
            activeItem={activeItem} 
            setActiveItem={setActiveItem} 
            name='Projects' 
            route='/projects' 
            /> 
          <NavItem 
          activeItem={activeItem} 
          setActiveItem={setActiveItem} 
          name='Resume' 
          route='/resumes' 
          /> 
        </div>
    </div>
  )
}

export default Navbar;