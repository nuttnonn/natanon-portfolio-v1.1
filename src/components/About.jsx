"use client"

import React from 'react'
import {motion} from 'framer-motion'
import * as Icons from './Icons'

// export const runtime = 'edge';

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
    <div id="about" className="w-full h-min min-h-[calc(100dvh-76px)] flex justify-center items-start bg-light text-primary">
      <div className="flex flex-col justify-start items-center w-[90%] max-w-[900px] h-min my-[96px]">
        <motion.div
          className="w-full h-min flex justify-between items-center"
          initial={{opacity:0, y:-200}}
          animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.5, ease:[0, 0.71, 0.2, 1.01]}}}
        >
          <div className="w-[45%] h-min">
            <h1 className="w-min h-min text-[44px] font-[900] uppercase">about</h1>
            <h2 className="w-[90%] h-min flex justify-start items-center text-[16px] font-[400]">I&apos;m&nbsp;a front-end developer based in Bangkok, Thailand. I love to create things. And now I have a passion for bringing ideas to life through code.</h2>
          </div>
          <div className="w-[50%] h-min">
            <Icons.ManAbout className="w-full h-auto" />
          </div>
        </motion.div>

        <div className="w-full h-min flex flex-col justify-center items-center gap-[44px] mt-[40px]">
          {aboutContent.map(content =>(
            <motion.div
              key={content.title}
              className="w-[85%] h-min grid grid-cols-[20%,auto] justify-items-start items-start"
              initial={{opacity:0, y:-150}}
              animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.48, ease:[0, 0.71, 0.2, 1.01]}}}>
              <div className="w-full flex justify-start items-center leading-[27px] text-[14px] font-[600] uppercase">
                {content.title}
              </div>
              <div className="w-full h-min text-start text-[18px] font-[600] capitalize">
                {content.subTitle}
              </div>
              <span className="col-start-2 w-full h-min mt-[8px] text-[16px] text-start font-[300]">
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