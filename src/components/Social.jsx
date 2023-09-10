"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {InstagramIcon, LinkedinIcon, GithubSocialIcon, GmailIcon} from './Icons'

const MotionLink = motion(Link)
const IconClassName = "w-[40px] h-auto fill-gray hover:fill-light hover:ease-in-out duration-300"

const Social = () => {
  return (
    <div className="w-min h-min flex gap-2">
      <MotionLink
        href="https://www.instagram.com/nuttnonn/"
        target="_blank"
        className="w-min h-min flex justify-center items-center"
        whileHover={{y:-6}}
        whileTap={{scale:0.8}}
      >
        <InstagramIcon className={`${IconClassName}`} />
      </MotionLink>
      <MotionLink
        href="https://www.linkedin.com/in/natanon-trangratanajit-194b241bb/"
        target="_blank"
        className="w-min h-min flex justify-center items-center"
        whileHover={{y:-6}}
        whileTap={{scale:0.8}}
      >
        <LinkedinIcon className={`${IconClassName}`} />
      </MotionLink>
      <MotionLink
        href="https://github.com/nuttnonn"
        target="_blank"
        className="w-min h-min flex justify-center items-center"
        whileHover={{y:-6}}
        whileTap={{scale:0.8}}
      >
        <GithubSocialIcon className={`${IconClassName}`} />
      </MotionLink>
      <MotionLink
        href="mailto:nutt.nonn@gmail.com"
        target="_blank"
        className="w-min h-min flex justify-center items-center"
        whileHover={{y:-6}}
        whileTap={{scale:0.8}}
      >
        <GmailIcon className={`${IconClassName}`} />
      </MotionLink>
    </div>
  )
}

export default Social