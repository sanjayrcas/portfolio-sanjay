import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function Header() {
    const [toggleMenu,setToggleMenu] = useState(false);
    return (
        <header className='flex justify-between px-5 py-2 bg-primary'>
            <Link to="#" className='font-bold text-black'>Sanjay G</Link>
            <nav className='hidden md:block'>
                <ul className='flex text-white'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="#projects">Projects</Link></li>
                    <li><Link to="#resume">Resume</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                </ul>
            </nav>
            {toggleMenu && <nav className='block md:hidden'>
                <ul onClick={()=>setToggleMenu(!toggleMenu)} className='flex flex-col text-white mobile-nav'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="#projects">Projects</Link></li>
                    <li><Link to="#resume">Resume</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                </ul>
            </nav>}
            <button className='block md:hidden' onClick={()=>setToggleMenu(!toggleMenu)}><Bars3Icon className='text-white h-5' /></button>
        </header>
    )
}
