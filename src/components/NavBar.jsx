"use client"

import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import Resume from './Resume'
import Social from './Social'

const CustomLink = ({href, title, className=""}) => {
  const pathname = usePathname()
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      <div className={`h-px inline-block bg-light absolute -left-0.5 bottom-2 group-hover:w-full transition-all ease duration-300 ${pathname === href ? 'w-full' : 'w-0'}`} />
    </Link>
  )
}

const NavBar = () => {
  return (
    <div className="w-full h-min flex justify-center items-center sticky top-0">
      <div className="w-[98%] h-[70px] flex justify-between items-center mt-[15px] bg-darkPurple/[.15] rounded-[35px] hover:bg-darkPurple/[.6] ease-in-out duration-300 backdrop-blur-md">
        <div className="w-min h-min flex justify-center items-center gap-5">
          <Logo />
          <div className="flex items-center ml-2 space-x-[20px] text-[12px] font-[400] tracking-[5px] uppercase">
            <CustomLink href="/" title="/Home" className="hover:italic" />
            <CustomLink href="/about" title="/About" className="hover:italic" />
            <CustomLink href="/skills" title="/Skills" className="hover:italic" />
            <CustomLink href="/projects" title="/Projects" className="hover:italic" />
          </div>
        </div>
        <div className="w-min h-min flex justify-center items-center gap-5">
          <Social />
          <Resume />
        </div>
      </div>
    </div>
  )
}

export default NavBar