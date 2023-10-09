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
      <div className="w-[90%] max-w-[1000px] h-min mt-[160px] flex flex-col justify-start items-center sm:mt-[92px]">
        <div className="w-full h-min flex justify-between items-center sm:flex-col-reverse">
          <div className="w-[50%] h-auto self-end md:self-center sm:w-[80%] sm:mt-[36px]">
            <Image src={workSpace} alt="workSpace-picture" />
          </div>
          <div className="w-[40%] h-min flex flex-col justify-center items-start sm:w-full sm:justify-start sm:items-center">
            <h1 className="w-min h-min text-[44px] font-[900] uppercase">about</h1>
            <h2 className="w-[90%] h-min flex justify-start items-center text-dark text-[16px] font-[700] mt-[8px] sm:text-center">I&apos;m&nbsp;a front-end developer based in Bangkok, Thailand. I love to create things. And now I have a passion for bringing ideas to life through code.</h2>
          </div>
        </div>

        <div className="w-full h-min flex flex-col justify-center items-center gap-[44px] mt-[120px] sm:mt-[40px]">
          {aboutContent.map(content =>(
            <motion.div
              key={content.title}
              className="w-[80%] h-min grid grid-cols-[20%,auto] justify-items-start items-start lg:w-[85%] lg:grid-cols-[25%,auto] md:w-[95%] sm:flex sm:flex-col"
              initial={{opacity:0, scale:0.5, y:100}}
              whileInView={{opacity:1, scale:1, y:0, transition:{duration:0.6, delay:0.2, ease:[0, 0.71, 0.2, 1.01]}}}
              viewport={{once: true}}
            >
              <div className="w-full flex justify-start items-center leading-[27px] text-primary text-[14px] font-[600] uppercase">
                {content.title}
              </div>
              <div className="w-full h-min text-start text-[18px] text-dark font-[600] capitalize sm:mt-[12px]">
                {content.subTitle}
              </div>
              <span className="col-start-2 w-full h-min mt-[8px] text-[16px] text-dark text-start font-[300] leading-relaxed sm:mt-[8px] sm:text-start">
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