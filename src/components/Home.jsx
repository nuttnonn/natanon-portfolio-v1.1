"use client"

import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import profilePicture from "../../public/profilePicture.JPG"
// import Spotify from '../components/Spotify'

export const runtime = 'edge';

const homeContent = [
  {
    description:"A robotics engineer who's found a new passion in web development. With a proven tracks record of innovation in robotics, I'm now channeling my expertise into crafting elegant web solutions. Join me in exploring a world where precision engineering meets captivating design, and let's redefine what's possible together.",
  }
]

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/recently-played`, )
      const data = await res.json()
      setSpotify(data)
    }
    fetchData()
  }, [])
  const [spotify, setSpotify] = useState()
  console.log(spotify)

  return (
    <div id="home" className="w-full h-min min-h-[calc(100dvh-76px)] flex justify-center items-center mb-[76px] pt-[76px] sm:items-start">
      <div className="w-[90%] max-w-[1200px] h-min flex justify-between items-center sm:flex-col-reverse sm:justify-start sm:items-center">
        <div className="w-[60%] h-min flex flex-col justify-start items-start sm:w-[90%] sm:mb-[40px]">
          <motion.div
            className="w-full h-min flex justify-start items-start text-[72px] text-start font-[900] uppercase leading-[64px] xl:text-[60px] xl:leading-[52px] lg:text-[46px] lg:leading-[44px] md:text-[36px] md:leading-[32px] sm:justify-center sm:text-[40px] sm:leading-[36px] sm:mt-[40px] xs:text-[30px] xs:leading-[28px]"
            initial={{opacity:0, scale:0.9}}
            animate={{opacity:1, scale:1, transition:{duration:0.6, delay:0.48, ease:[0, 0.71, 0.2, 1.01]}}}>
            <div className="w-min h-min flex flex-col justify-start items-start">
              <h1>Hello</h1>
              <h1>I&apos;m&nbsp;Natanon</h1>
              <h1>Trangratanajit</h1>
            </div>
          </motion.div>
          {homeContent.map(content =>(
            <motion.div
              key={content.description}
              className="w-full h-min flex text-[16px] mt-[36px] text-start text-gray font-[300] xl:mt-[20px] md:mt-[16px] md:leading-[20px] sm:text-center"
              initial={{opacity:0, y:-10}}
              animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.9, ease:[0, 0.71, 0.2, 1.01]}}}>
              {content.description}
            </motion.div>
          ))}
          <motion.div
            className="w-full h-min flex gap-[24px] justify-start items-center mt-[36px] text-primary xl:mt-[20px] md:mt-[16px] sm:justify-center"
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
          className="w-[30%] h-min flex bg-light flex-col border-[16px] border-light shadow-profilePicture xl:border-[12px] xl:shadow-profilePictureXL lg:border-[8px] lg:shadow-profilePictureLg sm:w-[45%] sm:mt-[28px] sm:border-[6px] sm:shadow-profilePictureSm"
          initial={{opacity:0, x:-150}}
          animate={{opacity:1, x:0, transition:{duration:0.6, delay:0.5, ease:[0, 0.71, 0.2, 1.01]}}}
        >
          <Image src={profilePicture} alt="profile-picture" className="w-full" />
          {spotify ? (
            <div className="text-dark">
              {spotify.recently.trackName}
            </div>
          ) : (
            <div>Loading Spotify data...</div>
          )}
        </motion.div>
      </div>
    </div>
  )
}