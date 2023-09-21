"use client"

import React, { useState } from 'react'
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

const CustomMobileLink = ({href, target, title, className="", onClick}) => {
  const pathname = usePathname()
  return(
    <div className="w-full h-min flex flex-col justify-start items-start">
      <Link href={href} target={target} className={`${className} relative group`} onClick={onClick}>
        {title}
        <div className={`w-full h-0 inline-block bg-secondary absolute -left-[1px] top-[18px] group-hover:h-[4px] transition-all ease duration-200 ${pathname === href ? 'w-full' : 'w-0'}`} />
      </Link>
      <div className="w-[90%] h-[1px] mt-[6px] bg-light/[.2]" />
    </div>
  )
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full h-min flex flex-col justify-center items-center fixed top-0">
      <div className={`w-[90%] max-w-[900px] min-h-[56px] flex flex-col justify-start items-center mt-[20px] rounded-[28px] hover:bg-dark/[.55] hover:shadow-lg backdrop-blur-md ${isOpen ? 'h-[330px] bg-dark/[.55]' : 'h-[56px] bg-primary/[.2]'} transition-all ease duration-300 sm:backdrop-blur-[8px]`}>
        <div className="w-full h-min flex justify-between items-center translate-y-[8px]">
          <div className="w-min h-full flex justify-between items-center">
            <Logo />
          </div>
          <div className="w-full h-full flex justify-between items-center md:hidden">
            <div className="flex items-center ml-[20px] space-x-[20px] text-[12px] font-[600] tracking-[2px] uppercase">
              <CustomLink href="/#home" title="/Home" />
              <CustomLink href="/#about" title="/About" />
              <CustomLink href="/#skills" title="/Skills" />
              <CustomLink href="/#projects" title="/Projects" />
            </div>
            <div className="w-min h-full flex justify-center items-center gap-[20px]">
              <Social />
              <Resume />
            </div>
          </div>
          <button className="w-[40px] h-[40px] flex-col justify-center items-center mr-[8px] rounded-[20px] border-[1px] border-light hidden md:flex" onClick={handleClick}>
            <span className={`bg-light block transition-all duration-300 ease-out h-[3px] w-6 rounded-md ${isOpen ? 'rotate-45 translate-y-[5px]' : '-translate-y-0.5'}`}></span>
            <span className={`bg-light block transition-all duration-300 ease-out h-[3px] w-6 rounded-md my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-light block transition-all duration-300 ease-out h-[3px] w-6 rounded-md ${isOpen ? '-rotate-45 -translate-y-[5px]' : 'translate-y-0.5'}`}></span>
          </button>
        </div>
        <div className={`w-full max-w-[900px] h-min flex-col justify-between items-start pt-[32px] rounded-b-[35px] ${isOpen ? 'flex' : 'hidden'} overflow-hidden`}>
          <div className="w-full h-min flex flex-col justify-center items-start gap-[20px] pl-[56px] text-[12px] font-[600] tracking-[2px] uppercase">
            <CustomMobileLink href="/#home" title="/Home" onClick={handleClick} />
            <CustomMobileLink href="/#about" title="/About" onClick={handleClick} />
            <CustomMobileLink href="/#skills" title="/Skills" onClick={handleClick} />
            <CustomMobileLink href="/#projects" title="/Projects" onClick={handleClick} />
            <CustomMobileLink href="/natanon_trangratanajit_resume.pdf" target="_blank" title="↓resume" onClick={handleClick} />
          </div>
          <div className="w-min h-full self-center flex flex-col justify-center items-center gap-[20px] mt-[10px]" onClick={handleClick}>
            <Social />
          </div>
        </div>
      </div>
      <div className={`w-full h-[calc(100dvh-76px)] ${isOpen ? 'flex' : 'hidden'}`} onClick={handleClick} />
    </div>
  )
}

export default NavBar