"use client"

import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

const homeContent = [
  {
    title:"Welcome, I'm Natanon Trangratanajit",
    description:"A robotics engineer who's found a new passion in web development. With a proven track record of innovation in robotics, I'm now channeling my expertise into crafting elegant web solutions. Join me in exploring a world where precision engineering meets captivating design, and let's redefine what's possible together.",
  }
]

export default function Home() {
  return (
    <div className="flex w-full h-min min-h-[calc(100dvh-85px)] justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[90%] max-w-[1000px] h-min text-light">
        {homeContent.map(content =>(
          <div key={content.title} className="flex flex-col justify-center items-center">
            <motion.div
              key={content.title}
              className="w-full h-min text-[33px] text-center font-[500] tracking-[7px] uppercase"
              initial={{opacity:0, scale:0.9}}
              animate={{opacity:1, scale:1, transition:{duration:0.6, delay:0.48, ease:[0, 0.71, 0.2, 1.01]}}}>
              {content.title}
            </motion.div>

            <motion.div
              key={content.description}
              className="w-[80%] h-min text-[20px] mt-[3px] text-center text-gray font-[300] tracking-[1.5px]"
              initial={{opacity:0, y:-10}}
              animate={{opacity:1, y:0, transition:{duration:1.5, delay:0.9, ease:[0, 0.71, 0.2, 1.01]}}}>
              {content.description}
            </motion.div>

            <motion.div
              className="w-min h-min flex gap-[20px] justify-center mt-[30px]"
              initial={{opacity:0, x:-30}}
              animate={{opacity:1, x:0, transition:{duration:1.8, delay:1.4, ease:[0, 0.71, 0.2, 1.01]}}}>
                <Link
                  href="/natanon_trangratanajit_resume.pdf"
                  target="_blank"
                  className="px-1 text-lightPurple text-[18px] font-[300] underline underline-offset-4 hover:text-primary hover:bg-[#38a3a5] hover:ease-in-out duration-300">
                  ↓&nbsp;resume
                </Link>
                <Link
                  href="mailto:nutt.nonn@gmail.com"
                  target="_blank"
                  className="px-1 text-lightPurple text-[18px] font-[300] underline underline-offset-4 hover:text-primary hover:bg-[#38a3a5] hover:ease-in-out duration-300">
                  contact
                </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}