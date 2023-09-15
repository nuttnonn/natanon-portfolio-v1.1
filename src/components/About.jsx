"use client"

import React from 'react'
import {motion} from 'framer-motion'
import workSpace from '../../public/workspace.svg'
import Image from 'next/image'

export const runtime = 'edge';

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
    <div id="about" className="w-full h-min min-h-screen flex justify-center items-start bg-light text-primary">
      <div className="w-[90%] max-w-[1000px] h-min mt-[160px] flex flex-col justify-start items-center">
        <motion.div
          className="w-full h-min flex justify-between items-center"
          initial={{opacity:0, y:-200}}
          animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.5, ease:[0, 0.71, 0.2, 1.01]}}}
        >
          <div className="w-[50%] h-auto self-end">
            <Image src={workSpace} alt="workSpace-picture" />
          </div>
          <div className="w-[40%] h-min flex flex-col justify-center items-start">
            <h1 className="w-min h-min text-[44px] font-[900] uppercase">about</h1>
            <h2 className="w-[90%] h-min flex justify-start items-center text-dark text-[16px] font-[700] mt-[8px]">I&apos;m&nbsp;a front-end developer based in Bangkok, Thailand. I love to create things. And now I have a passion for bringing ideas to life through code.</h2>
          </div>
        </motion.div>

        <div className="w-full h-min flex flex-col justify-center items-center gap-[44px] mt-[120px]">
          {aboutContent.map(content =>(
            <motion.div
              key={content.title}
              className="w-[80%] h-min grid grid-cols-[20%,auto] justify-items-start items-start"
              initial={{opacity:0, y:-150}}
              animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.48, ease:[0, 0.71, 0.2, 1.01]}}}>
              <div className="w-full flex justify-start items-center leading-[27px] text-primary text-[14px] font-[600] uppercase">
                {content.title}
              </div>
              <div className="w-full h-min text-start text-[18px] text-dark font-[600] capitalize">
                {content.subTitle}
              </div>
              <span className="col-start-2 w-full h-min mt-[8px] text-[16px] text-dark text-start font-[300] leading-relaxed">
                {content.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;