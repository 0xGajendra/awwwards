import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'

const App = () => {
  return (
    <div  className='relative min-h-screen w-screen overflow-x-hidden bg-blue-75'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
    </div>
  )
}

export default App
