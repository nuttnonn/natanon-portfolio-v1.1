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
      <div className={`w-full h-0 inline-block bg-secondary absolute -left-[1px] top-[18px] group-hover:h-[4px] transition-all ease duration-200 ${pathname === href ? 'w-full' : 'w-0'}`} />
    </Link>
  )
}

const NavBar = () => {
  return (
    <div className="w-full h-full flex justify-center items-center sticky top-0">
      <div className="w-[90%] max-w-[900px] h-[56px] flex justify-between items-center mt-[20px] bg-primary/[.3] rounded-[35px] hover:bg-dark/[.7] hover:shadow-lg ease-in-out duration-300 backdrop-blur-md">
        <div className="flex justify-center items-center">
          <Logo />
          <div className="flex items-center ml-[36px] space-x-[20px] text-[12px] font-[600] tracking-[2px] uppercase">
            <CustomLink href="/#home" title="/Home" />
            <CustomLink href="/#about" title="/About" />
            <CustomLink href="/#skills" title="/Skills" />
            <CustomLink href="/#projects" title="/Projects" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-[16px]">
          <Social />
          <Resume />
        </div>
      </div>
    </div>
  )
}

export default NavBar