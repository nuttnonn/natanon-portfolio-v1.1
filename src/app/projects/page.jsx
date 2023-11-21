'use client'

import React from 'react'
import Card from '../../components/Card'
import weatherAppPicture from '../../../public/weather-app.png';
import restaurantAppPicture from '../../../public/restaurant-app.png'
import investmentCalculatorAppPicture from '../../../public/investment-calculator-app.png';
import projectManagerAppPicture from '../../../public/project-manager-app.png';
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="w-full h-min min-h-screen flex justify-center items-start"
      initial={{opacity:0, scale:0.9}}
      animate={{opacity:1, scale:1, transition:{duration:0.6, delay:0.48, ease:[0, 0.71, 0.2, 1.01]}}}
    >
      <div id="projects" className="w-[90%] max-w-[1000px] h-min my-[140px] flex flex-col justify-start items-center md:my-[120px] sm:my-[98px]">
        <h1 className="text-[44px] font-[900] uppercase mb-[40px]">projects</h1>
        <div className="flex flex-col gap-[40px]">
          <Card
            title="Weather App"
            description="A weather forecast dashboard to show current day and daily next 5 days forecast data using a free Weather-API from Open Weather Map. Used a GeoDB-Cities API from Rapid API to make users choose data to forecast by city."
            image={weatherAppPicture}
            imageAlt="weather-app-demo"
            url="https://react-weather-app-cu3.pages.dev/"
          />
          <Card
            title="Restaurant App"
            description="A weather forecast dashboard to show current day and daily next 5 days forecast data using a free Weather-API from Open Weather Map. Used a GeoDB-Cities API from Rapid API to make users choose data to forecast by city."
            image={restaurantAppPicture}
            imageAlt="restaurant-app-demo"
            url="https://react-restaurant-app.pages.dev/"
            reverse
          />
          <Card
            title="Project Manager App"
            description="In a project manager application, the user can create a project and define the date and details of the project. Also inside the project user can create a task for the project."
            image={projectManagerAppPicture}
            imageAlt="project-manager-app-demo"
            url="https://project-management-app.pages.dev/"
          />
          <Card
            title="Investment Calculator App"
            description="An investment calculator to help users calculate a basic income and plan to invest by inputting
current savings, yearly savings, expected interest and investment duration."
            image={investmentCalculatorAppPicture}
            imageAlt="investment-calculator-app"
            url="https://investment-calculator-app.pages.dev/"
            reverse
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Projects