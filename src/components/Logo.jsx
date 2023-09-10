"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <MotionLink
      href="/"
      className="w-[50px] h-[50px] ml-[10px] flex justify-center items-center bg-lightPurple rounded-[50%]"
      whileHover={{scale:1.3, rotate:180}}
      whileTap={{scale:1.1, backgroundColor:"#616173"}}
    >
      <h1 className="pr-[3px] text-[30px] text-center text-primary font-[900] tracking-[-2.5px]">NT</h1>
    </MotionLink>
  )
}

export default Logo