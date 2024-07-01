'use client'

import React from 'react'
import Link from 'next/link'
import { IoBugSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';


const NavBar = () => {
    const currentPath = usePathname()
    const links = [
        { label : 'Dashboard',href : '/'},
        { label : 'Issues',href : '/issues'}
    ]
  return (
    
    
    <div>
        <nav className='flex space-x-24 items-center mb-10 border-b h-14 px-5 '>
        <li className='list-none m-10 '><Link href='/'><IoBugSharp /></Link></li>
        <ul className='flex space-x-6  '>
            {links.map(link => 
            <Link 
                key ={link.href}
                 className={classnames({
                    'text-zinc-800' : link.href === currentPath,
                    'text-zinc-400' : link.href !== currentPath,
                    'hover:text-zinc-500 transition-colors' : true 
                })} 
                href={link.href}>{link.label}</Link>)}
        </ul>
        </nav>
    </div>
  )
}

export default NavBar


