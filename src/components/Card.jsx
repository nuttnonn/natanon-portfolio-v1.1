'use client'

import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'

const Card = ({ title, description, image, imageAlt, url, reverse }) => {
  const handleDirection = () => {
    if (reverse) {
      return {opacity:0, x:200}
    } else {
      return {opacity:0, x:-200}
    }
  }

  return (
    <motion.div
      className={`flex ${reverse === true && 'flex-row-reverse'} justify-center items-center gap-[40px] bg-dark/50 rounded-2xl shadow-xl p-[20px] md:gap-[16px] sm:flex-col`}
      initial={handleDirection}
      whileInView={{opacity:1, x:0, transition:{duration:0.6, delay:0.3, ease:[0, 0.71, 0.2, 1.01]}}}
      viewport={{once: true}}
    >
      <Link href={url} target="_blank" className="w-[45%] overflow-hidden rounded-md sm:w-[95%]">
        <Image src={image} alt={imageAlt} className="w-full ease-in-out duration-500 hover:scale-[115%] hover:brightness-[60%]" />
      </Link>
      <div className="w-[40%] flex flex-col justify-between md:w-[50%] sm:w-[95%]">
        <h2 className="text-[20px] font-bold uppercase mb-[10px] sm:text-[16px]">{title}</h2>
        <p className="text-[14px] text-light/75 sm:text-[12px]">{description}</p>
        <Link href={url} target="_blank" className="flex self-end gap-1 mt-[20px] group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            id="Open"
            className="w-[14px] fill-secondary ease-in-out duration-300 group-hover:fill-light sm:w-[12px]"
          >
            <switch>
              <g className="fill-secondary svgShape"><path d="M88 48a4 4 0 0 0-4 4v28c0 2.21-1.79 4-4 4H16c-2.21 0-4-1.79-4-4V16c0-2.21 1.79-4 4-4h28a4 4 0 0 0 0-8H16C9.373 4 4 9.373 4 16v64c0 6.627 5.373 12 12 12h64c6.627 0 12-5.373 12-12V52a4 4 0 0 0-4-4zm4-40v24a4 4 0 0 1-8 0V17.656l-32.771 32.77a4 4 0 0 1-5.655-5.656L78.343 12H64a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4z" className="fill-secondary ease-in-out duration-150 group-hover:fill-light svgShape"></path></g>
            </switch>
          </svg>
          <p className="text-[14px] text-secondary group-hover:underline ease-in-out duration-150 group-hover:text-light sm:text-[12px]">Explore</p>
        </Link>
      </div>
    </motion.div>
  );
}

export default Card;