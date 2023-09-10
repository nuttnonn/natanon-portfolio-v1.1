"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ColorSplash from '/public/colorSplash.png'
import * as Icons from '../../components/Icons'

const skillsIntro = [
  {
    title: "live",
    key: "card1"
  },
  {
    title: "and",
    key: "card2"
  },
  {
    title: "learn",
    key: "card3"
  },
]
const IconClassName = "w-[22px] h-auto fill-primary"
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
    category: 'Frameworks',
    list: [
      {name: 'ReactJS', icon: <Icons.ReactIcon className={`${IconClassName}`} />},
      {name: 'NextJS', icon: <Icons.NextJSIcon className={`${IconClassName}`} />},
      {name: 'TailwindCSS', icon: <Icons.TailwindIcon className={`${IconClassName}`} />},
      {name: 'Framer Motion', icon: <Icons.FramerMotionIcon className={`${IconClassName}`} />},
      {name: 'ROS', icon: <Icons.ROSIcon className={`${IconClassName}`} />},
    ],
  },
  {
    category: 'Styling and Design',
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
    category: 'Collaboration and Communication',
    list: [
      {name: 'Teamwork', icon: <Icons.TeamWorkIcon className={`${IconClassName}`} />},
      {name: 'Open-Mindedness', icon: <Icons.OpenMindednessIcon className={`${IconClassName}`} />},
      {name: 'Problem Solving', icon: <Icons.ProblemSolvingIcon className={`${IconClassName}`} />},
      {name: 'Time Management', icon: <Icons.TimeManagementIcon className={`${IconClassName}`} />},
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
    <div id="skills" className="w-full h-min min-h-[calc(100dvh-95px)] flex justify-center items-center z-10">
      <div className="flex flex-col justify-center items-center w-[90%] max-w-[940px] h-min mt-[5rem]">
        <motion.div
          className="w-full h-min text-center text-[32px] font-[600] tracking-[7px] uppercase"
          initial={{opacity:0, y:-200}}
          animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.5, ease:[0, 0.71, 0.2, 1.01]}}}>
          <h1 className="w-min h-min">Skills</h1>
          <motion.div className="mt-1 w-full h-px bg-light" initial={{opacity:0, y:-200}} animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.25, ease:[0, 0.71, 0.2, 1.01]}}} />
        </motion.div>

        <motion.div
          className="w-full h-min mt-[40px] flex flex-col items-center"
          initial={{opacity:0, y:-150}}
          animate={{opacity:1, y:0, transition:{duration:0.6, delay:0.48, ease:[0, 0.71, 0.2, 1.01]}}}>
          <div className="w-[90%] grid grid-rows-1 grid-cols-[2fr,1fr] justify-items-start items-center">
            <Image src={ColorSplash} alt="color-splash" className="w-full row-start-1 row-end-2 col-start-1 col-end-3" />
            <div className="row-start-1 row-end-2 col-start-2 col-end-3 z-1">
              {skillsIntro.map(item => (
                <div key={item.key} className="w-min h-min text-[60px] font-[800] text-gray uppercase tracking-[15px]">
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          <div className="w-[90%] h-min mt-[40px] text-[18px] text-gray text-start font-[300] indent-10 leading-loose">
            <p>Welcome to the intersection of my journey. This section offers a glimpse into the <strong className="text-light font-[500]">merging</strong> of my background in <strong className="text-light font-[500]">robotics</strong> engineering and my fresh exploration in <strong className="text-light font-[500]">web development</strong>. The <strong className="text-light font-[500]">skill</strong> showcases ahead present a blend of past expertise and new endeavors. As you explore further, you will see how my experiences shape a <strong className="text-light font-[500]">diverse</strong> portfolio. It is a reflection of my <strong className="text-light font-[500]">commitment to growth</strong> and a showcase of the skills that define my path. Join me on this visual journey where each skill adds to the story of my <strong className="text-light font-[500]">progression</strong>.</p>
          </div>

          <div className="w-[95%] h-min mt-[40px] mb-[10rem] grid grid-cols-6 grid-rows-[fit,fit,fit] gap-4 [&>*:nth-child(2)]:col-span-3 [&>*:nth-child(6)]:col-span-4">
            {skills.map(skillCategory => (
              <div key={skillCategory.category} className="col-span-2 first:col-span-3 flex flex-col border-2 border-gray rounded-xl">
                <h3 className="w-full h-min py-[2px] pr-[10px] text-end text-[12px] rounded-t-lg font-[600] uppercase tracking-[1.5px] text-primary bg-gray">
                  {skillCategory.category}
                </h3>
                <div className="w-full h-min flex flex-wrap gap-[5px] p-[6px]">
                  {skillCategory.list.map(skill => (
                    <div key={skill.name} className="w-min h-min flex items-center px-[5px] py-[6px] bg-gray rounded-md">
                      <div className="mx-1">
                        {skill.icon}
                      </div>
                      <div className="block whitespace-nowrap text-[16px] font-[400] text-primary">
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