import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div  className='relative min-h-screen w-screen overflow-x-hidden bg-gray-700'>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
