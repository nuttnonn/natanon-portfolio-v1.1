"use client"

import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import profilePicture from "../../public/profilePicture.JPG"

export const runtime = 'edge';

const homeContent = [
  {
    description:"A robotics engineer who's found a new passion in web development. With a proven track record of innovation in robotics, I'm now channeling my expertise into crafting elegant web solutions. Join me in exploring a world where precision engineering meets captivating design, and let's redefine what's possible together.",
  }
]

export default function Home() {
  return (
    <div id="home" className="w-full h-min min-h-[calc(100dvh-76px)] flex justify-center items-center">
      <div className="w-[90%] max-w-[1200px] h-min flex justify-between items-center">
        <div className="w-[60%] h-min flex flex-col justify-start items-start">
          <motion.div
            className="w-full h-min text-[72px] text-start font-[900] uppercase leading-[64px]"
            initial={{opacity:0, scale:0.9}}
            animate={{opacity:1, scale:1, transition:{duration:0.6, delay:0.48, ease:[0, 0.71, 0.2, 1.01]}}}>
            <h1>Hello</h1>
            <h1>I&apos;m&nbsp;Natanon</h1>
            <h1>Trangratanajit</h1>
          </motion.div>
          {homeContent.map(content =>(
            <motion.div
              key={content.description}
              className="w- h-min text-[16px] mt-[36px] text-start text-gray font-[300]"
              initial={{opacity:0, y:-10}}
              animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.9, ease:[0, 0.71, 0.2, 1.01]}}}>
              {content.description}
            </motion.div>
          ))}
          <motion.div
            className="w-min h-min flex gap-[24px] justify-start items-center mt-[36px] text-primary"
            initial={{opacity:0, x:-30}}
            animate={{opacity:1, x:0, transition:{duration:0.6, delay:1.4, ease:[0, 0.71, 0.2, 1.01]}}}>
            <Link
              href="/natanon_trangratanajit_resume.pdf"
              target="_blank"
              className="px-[16px] py-[4px] text-[14px] font-[600] rounded-sm bg-secondary border-[1px] border-secondary hover:text-light hover:bg-primary hover:tracking-widest hover:ease-in-out duration-300">
              ↓&nbsp;resume
            </Link>
            <Link
              href="mailto:nutt.nonn@gmail.com"
              target="_blank"
              className="px-[16px] py-[4px] text-[14px] font-[600] rounded-sm bg-secondary border-[1px] border-secondary hover:text-light hover:bg-primary hover:tracking-widest hover:ease-in-out duration-300">
              contact
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="w-[30%] h-auto grid grid-rows-[auto,32px] grid-cols-[auto,36px] justify-items-end items-end"
          initial={{opacity:0, x:-150}}
          animate={{opacity:1, x:0, transition:{duration:0.6, delay:0.5, ease:[0, 0.71, 0.2, 1.01]}}}
        >
          <Image src={profilePicture} alt="profile-picture" className="w-full h-auto row-span-1 col-span-1" />
          <div className="w-full h-[calc(100%-32px)] bg-primary border-t-[4px] border-r-[4px] border-light row-start-1 row-end-3 col-start-2 col-end-3" />
          <div className="w-[calc(100%-36px)] h-full bg-primary border-l-[4px] border-r-[4px] border-b-[4px] border-light row-start-2 row-end-3 col-start-1 col-end-3" />
        </motion.div>
      </div>
    </div>
  )
}