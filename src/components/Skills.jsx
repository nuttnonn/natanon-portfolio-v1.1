"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import * as Icons from './Icons'
import developerPicture from '../../public/developer.svg'
import './Skills.css'

export const runtime = 'edge';
const IconClassName = "w-[20px] h-auto fill-secondary"
const skills = [
  {
    category: 'Programming Languages',
    list: [
      {name: 'HTML', icon: <Icons.HtmlIcon className={`${IconClassName}`} />},
      {name: 'CSS', icon: <Icons.CssIcon className={`${IconClassName}`} />},
      {name: 'JavaScript', icon: <Icons.JsIcon className={`${IconClassName}`} />},
      {name: 'TypeScript', icon: <Icons.TsIcon className={`${IconClassName}`} />},
      {name: 'Python', icon: <Icons.PythonIcon className={`${IconClassName}`} />},
      {name: 'C++', icon: <Icons.CplusplusIcon className={`${IconClassName}`} />},
      {name: 'MATLAB', icon: <Icons.MatlabIcon className={`${IconClassName}`} />},
      {name: 'UiPath', icon: <Icons.UiPathIcon className={`${IconClassName}`} />},
    ],
  },
  {
    category: 'Web Development',
    list: [
      {name: 'Responsive Design', icon: <Icons.ResponsiveIcon className={`${IconClassName}`} />},
      {name: 'Cross-Browser Compatibility', icon: <Icons.CrossBrowserIcon className={`${IconClassName}`} />},
      {name: 'DOM Manipulation', icon: <Icons.DOMIcon className={`${IconClassName}`} />},
    ],
  },
  {
    category: 'Frameworks & Libraries',
    list: [
      {name: 'ReactJS', icon: <Icons.ReactIcon className={`${IconClassName}`} />},
      {name: 'NextJS', icon: <Icons.NextJSIcon className={`${IconClassName}`} />},
      {name: 'TailwindCSS', icon: <Icons.TailwindIcon className={`${IconClassName}`} />},
      {name: 'Framer Motion', icon: <Icons.FramerMotionIcon className={`${IconClassName}`} />},
      {name: 'ROS', icon: <Icons.ROSIcon className={`${IconClassName}`} />},
    ],
  },
  {
    category: 'Styling & Design',
    list: [
      {name: 'FIGMA', icon: <Icons.FigmaIcon className={`${IconClassName}`} />},
      {name: 'Adobe Photoshop', icon: <Icons.PhotoshopIcon className={`${IconClassName}`} />},
      {name: 'SolidWorks', icon: <Icons.SolidworksIcon className={`${IconClassName}`} />},
      {name: 'Fusion360', icon: <Icons.Fusion360Icon className={`${IconClassName}`} />},
    ],
  },
  {
    category: 'Version Control',
    list: [
      {name: 'Git', icon: <Icons.GitIcon className={`${IconClassName}`} />},
      {name: 'Git Hub', icon: <Icons.GithubIcon className={`${IconClassName}`} />},
      {name: 'Git Lab', icon: <Icons.GitlabIcon className={`${IconClassName}`} />},
    ],
  },
  {
    category: 'Collaboration & Communication',
    list: [
      {name: 'Teamwork', icon: <Icons.TeamWorkIcon className={`${IconClassName}`} />},
      {name: 'Open-Mindedness', icon: <Icons.OpenMindednessIcon className={`${IconClassName}`} />},
      {name: 'Problem Solving', icon: <Icons.ProblemSolvingIcon className={`${IconClassName}`} />},
      {name: 'Time Management', icon: <Icons.TimeManagementIcon className={`${IconClassName}`} />},
      {name: 'Division of Labour', icon: <Icons.TimeManagementIcon className={`${IconClassName}`} />},
      {name: 'Clear Documentation', icon: <Icons.ClearDocumentIcon className={`${IconClassName}`} />}
    ],
  },
  {
    category: 'Passive Ability',
    list: [
      {name: 'Motorsport', icon: <Icons.MotorSportsIcon className={`${IconClassName}`} />},
      {name: 'Tape Measure Eye', icon: <Icons.TapeMeasureEyeIcon className={`${IconClassName}`} />},
      {name: 'Fall asleep quickly', icon: <Icons.FallASleepIcon className={`${IconClassName}`} />},
    ],
  },
]

const Skills = () => {
  return (
    <div id="skills" className="w-full h-min min-h-screen flex justify-center items-center bg-light text-primary">
      <div className="w-[90%] max-w-[1000px] h-min my-[160px] flex flex-col justify-start items-center">
        <motion.div
          className="w-full h-min flex justify-between items-center"
          initial={{opacity:0, y:-200}}
          animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.5, ease:[0, 0.71, 0.2, 1.01]}}}>
          <div className="w-[40%] h-min flex flex-col justify-center items-start">
            <h1 className="w-min h-min text-[44px] font-[900] uppercase">skills</h1>
            <h2 className="w-[90%] h-min flex justify-start items-center text-dark text-[16px] font-[700] mt-[8px]">Here, my old and fresh skills. All will be dedicated to crafting digital experiences.</h2>
          </div>
          <div className="w-[58%] h-auto self-end">
            <Image src={developerPicture} alt="developer-picture" />
          </div>
        </motion.div>

        <motion.div
          className="w-full h-min mt-[120px] flex flex-col items-center"
          initial={{opacity:0, y:-150}}
          animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.48, ease:[0, 0.71, 0.2, 1.01]}}}>
          <div className="w-[80%] h-min text-[18px] text-dark text-start font-[300] indent-[48px] leading-relaxed">
            Welcome to the intersection of my journey. This section offers a glimpse into the <strong className="font-[500]">merging</strong> of my background in <strong className="font-[500]">robotics</strong> engineering and my fresh exploration in <strong className="font-[500]">web development</strong>. The <strong className="font-[500]">skill</strong> showcases ahead present a blend of past expertise and new endeavors. As you explore further, you will see how my experiences shape a <strong className="font-[500]">diverse</strong> portfolio. It is a reflection of my <strong className="font-[500]">commitment to growth</strong> and a showcase of the skills that define my path. Join me on this visual journey where each skill adds to the story of my <strong className="font-[500]">progression</strong>.
          </div>

          <div className="w-[85%] h-min mt-[40px] grid grid-cols-6 grid-rows-[fit,fit,fit] gap-[16px] [&>*:nth-child(2)]:col-span-3 [&>*:nth-child(6)]:col-span-4">
            {skills.map(skillCategory => (
              <div key={skillCategory.category} className="col-span-2 first:col-span-3 flex flex-col border-2 border-primary rounded-xl hover:scale-105 ease-in-out duration-300">
                <h3 className="w-full h-min pr-[12px] text-end text-[12px] rounded-t-lg font-[600] uppercase text-light bg-primary">
                  {skillCategory.category}
                </h3>
                <div className="w-full h-min flex flex-wrap gap-[5px] p-[6px]">
                  {skillCategory.list.map(skill => (
                    <div key={skill.name} className="w-min h-min flex items-center px-[5px] py-[6px] bg-secondary/[.2] border-[2px] border-secondary rounded-md">
                      <div className="mx-1">
                        {skill.icon}
                      </div>
                      <div className="block whitespace-nowrap text-[14px] font-[400] text-dark">
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills