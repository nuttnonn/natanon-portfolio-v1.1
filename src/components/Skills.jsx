"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import * as Icons from './Icons'
import developerPicture from '../../public/developer.svg'

const IconClassName = "w-[20px] h-auto fill-dark"
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
      <div className="w-[90%] max-w-[1000px] h-min my-[160px] flex flex-col justify-start items-center md:my-[120px] sm:my-[98px]">
        <div className="w-[90%] h-min flex justify-between items-center sm:flex-col">
          <div className="w-[45%] h-min flex flex-col justify-center items-start sm:w-full sm:justify-start sm:items-center">
            <h1 className="w-min h-min text-[44px] font-[900] uppercase">skills</h1>
            <h2 className="w-[90%] h-min flex justify-start items-center text-dark text-[16px] font-[700] mt-[8px] sm:text-center">Here, my old and fresh skills. All will be dedicated to crafting digital experiences.</h2>
          </div>
          <div className="w-[54%] h-auto self-end md:self-center sm:w-[90%] sm:mt-[36px]">
            <Image src={developerPicture} alt="developer-picture" />
          </div>
        </div>

        <div className="w-full h-min mt-[96px] flex flex-col items-center lg:mt-[68px] sm:mt-[40px]">
          <motion.div
            className="w-[80%] h-min text-[18px] text-dark text-start font-[300] indent-[48px] leading-relaxed sm:w-[95%] sm:text-start"
            initial={{opacity:0, y:200}}
            whileInView={{opacity:1, y:0, transition:{duration:0.6, delay:0.15, ease:[0, 0.71, 0.2, 1.01]}}}
            viewport={{once: true}}
          >
            Welcome to the intersection of my journey. This section offers a glimpse into the <strong className="font-[500]">merging</strong> of my background in <strong className="font-[500]">robotics</strong> engineering and my fresh exploration in <strong className="font-[500]">web development</strong>. The <strong className="font-[500]">skill</strong> showcases ahead present a blend of past expertise and new endeavors. As you explore further, you will see how my experiences shape a <strong className="font-[500]">diverse</strong> portfolio. It is a reflection of my <strong className="font-[500]">commitment to growth</strong> and a showcase of the skills that define my path. Join me on this visual journey where each skill adds to the story of my <strong className="font-[500]">progression</strong>.
          </motion.div>
          <div className="w-[90%] h-min mt-[40px] grid grid-cols-6 grid-rows-[fit,fit,fit] gap-[16px] [&>*:nth-child(2)]:col-span-3 [&>*:nth-child(6)]:col-span-4 md:w-full md:gap-[8px] sm:flex sm:flex-col sm:gap-[12px]">
            {skills.map(skillCategory => (
              <motion.div
                key={skillCategory.category}
                className="col-span-2 first:col-span-3 flex flex-col border-2 border-dark/[.5] rounded-[6px]"
                initial={{opacity:0, y:200}}
                whileInView={{opacity:1, y:0, transition:{duration:0.6, delay:0.15, ease:[0, 0.71, 0.2, 1.01]}}}
                viewport={{once: true}}
              >
                <h3 className="w-full h-min pr-[12px] text-end text-[12px] rounded-t-[3px] font-[600] uppercase text-dark bg-secondary/[.3] border-b-2 border-dark/[.5] sm:text-start sm:pl-[12px]">
                  {skillCategory.category}
                </h3>
                <div className="w-full h-min flex flex-wrap gap-[5px] p-[6px]">
                  {skillCategory.list.map(skill => (
                    <div key={skill.name} className="w-min h-min flex items-center px-[5px] py-[6px] bg-[#fcf6e9] border-[1px] border-dark/[.3] rounded-[4px]">
                      <div className="mx-1">
                        {skill.icon}
                      </div>
                      <div className="block whitespace-nowrap text-[14px] font-[400] text-dark">
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills