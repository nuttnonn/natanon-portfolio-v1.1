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
    <div id="home" className="w-full h-min min-h-[calc(100dvh-76px)] flex justify-center items-center mt-[76px] sm:items-start">
      <div className="w-[90%] max-w-[1200px] h-min flex justify-between items-center lg:w-[95%] sm:flex-col-reverse sm:justify-start sm:items-center">
        <div className="w-[60%] h-min flex flex-col justify-start items-start sm:w-[90%]">
          <motion.div
            className="w-full h-min text-[72px] text-start font-[900] uppercase leading-[64px] xl:text-[60px] xl:leading-[52px] lg:text-[48px] lg:leading-[44px] md:text-[36px] md:leading-[32px] sm:text-[40px] sm:leading-[36px] sm:mt-[40px] xs:text-[32px] xs:leading-[28px]"
            initial={{opacity:0, scale:0.9}}
            animate={{opacity:1, scale:1, transition:{duration:0.6, delay:0.48, ease:[0, 0.71, 0.2, 1.01]}}}>
            <h1>Hello</h1>
            <h1>I&apos;m&nbsp;Natanon</h1>
            <h1>Trangratanajit</h1>
          </motion.div>
          {homeContent.map(content =>(
            <motion.div
              key={content.description}
              className="w-full h-min flex text-[16px] mt-[36px] text-start text-gray font-[300] xl:mt-[20px] md:mt-[16px] md:text-[14px]"
              initial={{opacity:0, y:-10}}
              animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.9, ease:[0, 0.71, 0.2, 1.01]}}}>
              {content.description}
            </motion.div>
          ))}
          <motion.div
            className="w-min h-min flex gap-[24px] justify-start items-center mt-[36px] text-primary xl:mt-[20px] md:mt-[16px]"
            initial={{opacity:0, x:-30}}
            animate={{opacity:1, x:0, transition:{duration:0.6, delay:1.4, ease:[0, 0.71, 0.2, 1.01]}}}>
            <Link
              href="/natanon_trangratanajit_resume.pdf"
              target="_blank"
              className="px-[16px] py-[4px] text-[14px] font-[600] rounded-sm bg-secondary border-[1px] border-secondary hover:text-light hover:bg-primary hover:tracking-widest hover:ease-in-out duration-300 md:px-[12px] md:py-[2px] md:text-[12px]">
              ↓&nbsp;resume
            </Link>
            <Link
              href="mailto:nutt.nonn@gmail.com"
              target="_blank"
              className="px-[16px] py-[4px] text-[14px] font-[600] rounded-sm bg-secondary border-[1px] border-secondary hover:text-light hover:bg-primary hover:tracking-widest hover:ease-in-out duration-300 md:px-[12px] md:py-[2px] md:text-[12px]">
              contact
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="w-[30%] h-auto grid grid-rows-[auto,32px] grid-cols-[auto,36px] justify-items-end items-end xl:grid-rows-[auto,24px] xl:grid-cols-[auto,28px] lg:grid-rows-[auto,20px] lg:grid-cols-[auto,24px] md:w-[35%] md:grid-rows-[auto,16px] md:grid-cols-[auto,20px] sm:w-[50%] sm:max-w-[250px] sm:mt-[32px]"
          initial={{opacity:0, x:-150}}
          animate={{opacity:1, x:0, transition:{duration:0.6, delay:0.5, ease:[0, 0.71, 0.2, 1.01]}}}
        >
          <Image src={profilePicture} alt="profile-picture" className="w-full h-auto row-span-1 col-span-1" />
          <div className="w-full h-[calc(100%-32px)] row-start-1 row-end-3 col-start-2 col-end-3 bg-primary border-t-[4px] border-r-[4px] border-light xl:h-[calc(100%-28px)] lg:h-[calc(100%-24px)] md:h-[calc(100%-20px)]" />
          <div className="w-[calc(100%-36px)] h-full row-start-2 row-end-3 col-start-1 col-end-3 bg-primary border-l-[4px] border-r-[4px] border-b-[4px] border-light xl:w-[calc(100%-24px)] lg:w-[calc(100%-20px)] md:w-[calc(100%-16px)]" />
        </motion.div>
      </div>
    </div>
  )
}