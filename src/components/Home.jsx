"use client"
export const revalidate = 10

import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import profilePicture from "../../public/profilePicture.JPG"

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

  const marqueeVariants = {
    animate: {
      x: [350, -200],
      transition: {
        x: {
          repeat: 'infinite',
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

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
          className="w-[30%] h-min flex flex-col bg-light border-[16px] border-light shadow-profilePicture xl:border-[12px] xl:shadow-profilePictureXL lg:border-[8px] lg:shadow-profilePictureLg sm:w-[45%] sm:mt-[28px] sm:border-[6px] sm:shadow-profilePictureSm"
          initial={{opacity:0, x:-150}}
          animate={{opacity:1, x:0, transition:{duration:0.6, delay:0.5, ease:[0, 0.71, 0.2, 1.01]}}}
        >
          <Image src={profilePicture} alt="profile-picture" className="w-full" />
          <div className="w-full flex justify-start items-center mt-[8px]">
            <div className="w-min px-[8px] flex items-center justify-center lg:p-0">
              <Link
                href="https://open.spotify.com/user/xrdq3uhu2s49kb2am7hk96nf8"
                target="_blank"
                className="w-[44px] h-[44px] flex justify-center items-center lg:w-[36px] lg:h-[36px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg" className="w-full fill-dark hover:fill-dark/[.7] ease-in-out duration-200" viewBox="-33.497 -55.829 290.311 334.974">
                  <path
                    d="M177.707 98.987c-35.992-21.375-95.36-23.34-129.719-12.912-5.519 1.674-11.353-1.44-13.024-6.958-1.672-5.521 1.439-11.352 6.96-13.029 39.443-11.972 105.008-9.66 146.443 14.936 4.964 2.947 6.59 9.356 3.649 14.31-2.944 4.963-9.359 6.6-14.31 3.653m-1.178 31.658c-2.525 4.098-7.883 5.383-11.975 2.867-30.005-18.444-75.762-23.788-111.262-13.012-4.603 1.39-9.466-1.204-10.864-5.8a8.717 8.717 0 0 1 5.805-10.856c40.553-12.307 90.968-6.347 125.432 14.833 4.092 2.52 5.38 7.88 2.864 11.968m-13.663 30.404a6.954 6.954 0 0 1-9.569 2.316c-26.22-16.025-59.223-19.644-98.09-10.766a6.955 6.955 0 0 1-8.331-5.232 6.95 6.95 0 0 1 5.233-8.334c42.533-9.722 79.017-5.538 108.448 12.446a6.96 6.96 0 0 1 2.31 9.57M111.656 0C49.992 0 0 49.99 0 111.656c0 61.672 49.992 111.66 111.657 111.66 61.668 0 111.659-49.988 111.659-111.66C223.316 49.991 173.326 0 111.657 0"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-full h-full flex flex-col ml-[8px] text-[14px] text-dark lg:text-[12px] lg:ml-[2px]">
              <p className="text-[12px] text-dark/[.3] lg:text-[10px]">Spotify Recently Played Track</p>
              {spotify &&
                <Link href={spotify.recently.trackUrl} target="_blank" className="w-full h-min text-dark overflow-hidden hover:underline">
                  <motion.div
                    className="whitespace-nowrap"
                    variants={marqueeVariants}
                    animate="animate"
                  >
                    {spotify && <div>{spotify.recently.trackName}</div>}
                  </motion.div>
                </Link>
              }
              {spotify &&
                <Link href={spotify.recently.artistUrl} target="_blank" className="w-full overflow-hidden text-dark">
                  {spotify && <div className="text-[11px] text-dark/[.7] hover:text-dark hover:underline lg:text-[9px]">{spotify.recently.artist}</div>}
                </Link>
              }
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}