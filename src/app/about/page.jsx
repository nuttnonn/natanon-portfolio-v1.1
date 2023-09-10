"use client"

import React from 'react'
import {motion} from 'framer-motion'
import profilePicture from '/public/profilePicture.jpg'
import Image from 'next/image'

const aboutContent = [
  {
    title: 'past - 2019',
    subTitle: 'Embracing the World of Robotics Engineering',
    description: 'With a robust background in robotics engineering spanning three years, I\'ve honed my skills in algorithm design, precision mechanics, and problem-solving. From concept to realization, I\'ve brought intricate mechanisms to life, driven by my passion for technology.',
  },
  {
    title: 'present - 2023',
    subTitle: 'Embarking on a Web Development Odyssey',
    description: 'Today, I\'m immersing myself in the realm of front-end development. Eagerly learning HTML, CSS, and JavaScript, I\'m committed to crafting seamless user experiences and enhancing my coding and design abilities.',
  },
  {
    title: 'future - 2024',
    subTitle: 'Pioneering the Path Forward',
    description: 'As I look ahead, my goal is clear: to become a skilled front-end developer who thrives on innovation. Through continuous learning and dedication, I\'m poised to create exceptional web solutions, merging my engineering background with cutting-edge development skills.',
  },
]

const About = () => {
  return (
    <div id="about" className="w-full h-min min-h-[calc(100dvh-85px)] grid grid-cols-[3fr,1fr] justify-items-end items-start gap-[120px]">
      <div className="flex flex-col justify-start items-center w-[90%] max-w-[940px] h-min mt-[5rem]">
        <motion.div
          className="w-full h-min text-center text-[32px] font-[600] tracking-[7px] uppercase"
          initial={{opacity:0, y:-200}}
          animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.5, ease:[0, 0.71, 0.2, 1.01]}}}>
          <h1 className="w-min h-min">About</h1>
          <motion.div className="mt-1 w-full h-px bg-light" initial={{opacity:0, y:-200}} animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.25, ease:[0, 0.71, 0.2, 1.01]}}} />
        </motion.div>
        <div className="flex flex-col gap-[40px] w-[88%] h-min mt-[50px]">
          {aboutContent.map(content =>(
            <motion.div
              key={content.title}
              className="w-full h-min grid grid-cols-[22%,auto] grid-rows-[auto,auto] justify-items-start items-start"
              initial={{opacity:0, y:-150}}
              animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.48, ease:[0, 0.71, 0.2, 1.01]}}}>
              <div className="w-full h-full flex justify-start items-center text-gray text-[14px] font-[500] uppercase tracking-[3px]">
                {content.title}
              </div>
              <div className="w-full h-min text-start text-[22px] text-light font-[500] tracking-normal capitalize">
                {content.subTitle}
              </div>
              <span className="col-start-2 w-full h-min mt-1.5 text-gray text-start font-[300] text-[18px] tracking-normal leading-7">
                {content.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="w-full max-w-[350px] h-min"
        initial={{opacity:0, y:-200}}
        animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.5, ease:[0, 0.71, 0.2, 1.01]}}}>
        <Image src={profilePicture} alt="profile-picture" className="w-full h-auto rounded-bl-[50px]" />
      </motion.div>
    </div>
  );
};

export default About;