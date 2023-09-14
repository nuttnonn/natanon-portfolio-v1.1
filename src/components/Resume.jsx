"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  const [text, setText] = useState('R')
  const [textStyles, setTextStyles] = useState('text-[24px] font-[900]')
  const handleHover = () => {
    if (text === "R"){
      setText("Resume")
      setTextStyles("text-[16px] font-[700]")
    } else {
      setText("R")
      setTextStyles("text-[24px] font-[900]")
    }
  }

  return (
    <MotionLink
      href="/natanon_trangratanajit_resume.pdf"
      target="_blank"
      onHoverStart={handleHover}
      onHoverEnd={handleHover}
      className="w-[40px] h-[40px] mr-[8px] flex justify-center items-center border-[1px] border-gray rounded-[25px] hover:w-[100px] ease-in-out duration-300"
      whileTap={{scale:0.8, backgroundColor:"#616173"}}
    >
      <div className={`text-center text-light overflow-hidden ease-in-out duration-300 ${textStyles}`}>{text}</div>
    </MotionLink>
  )
}

export default Logo