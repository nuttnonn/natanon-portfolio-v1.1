import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const Page = () => {
  return (
    <div className="w-full h-min min-h-screen">
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default Page