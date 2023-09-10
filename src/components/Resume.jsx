"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  const [text, setText] = useState('R')
  const [textStyles, setTextStyles] = useState('text-[30px] font-[900]')
  const handleHover = () => {
    if (text === "R"){
      setText("Resume")
      setTextStyles("text-[20px] font-[700]")
    } else {
      setText("R")
      setTextStyles("text-[30px] font-[900]")
    }
  }

  return (
    <MotionLink
      href="/natanon_trangratanajit_resume.pdf"
      target="_blank"
      onHoverStart={handleHover}
      onHoverEnd={handleHover}
      className="w-[50px] h-[50px] mr-[10px] flex justify-center items-center bg-lightPurple rounded-[25px] hover:w-[120px] ease-in-out duration-300"
      whileTap={{scale:0.9, backgroundColor:"#616173"}}
    >
      <div className={`pr - [3px] text-center text-primary overflow-hidden ease-in-out duration-500 ${textStyles}`}>{text}</div>
    </MotionLink>
  )
}

export default Logo