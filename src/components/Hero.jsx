import React, { useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideo = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = ()=> {
    setLoadedVideos((prev)=> (prev+1)%totalVideo)
  }

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex((prev) => (prev+1)%totalVideo)
   }
   
   const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
 
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
        <div>
          <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
            <div onClick={handleMiniVideoClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
              <video
              ref={nextVideoRef} 
              loop
              autoPlay
              muted
              id='current-video'
              className='size-64 origin-center object-cover scale-150 object-center'
              src={getVideoSrc(currentIndex+1)}

              //onLoadedData is a special function which will be called when the data is loaded
              onLoadedData = {handleVideoLoad}

              />
            </div>

          </div>
          <video
          ref={nextVideoRef}
          loop
          muted
          id='next-video'
          className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
          src={getVideoSrc(currentIndex)}
          />
          <video
          loop
          muted
          autoPlay
          id='next-video'
          className='absolute left-0 top-0 size-full object-cover object-center'
          src={getVideoSrc((currentIndex === totalVideo-1) ? 1: currentIndex)}
          />
        </div>
      <h1 className='special-font hero-heading z-40 absolute bottom-5 right-5 text-blue-75'>
        G<b>a</b>ming
      </h1>
        <div className='absolute left-0 top-0 z-40 size-full'>
          <div className='mt-24 px-5 sm:px-10'>
              <h1 className='special-font hero-heading text-blue-100'>
                redefi<b>n</b>e
              </h1>
              <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
                Enter the Metagame Layer <br/> Unleash the Play Economy
              </p>
              <Button id='watch-trailer' title='watch-trailer' leftIcon={<TiLocationArrow/>} containerClass="!bg-yellow-300 flex-center gap-1"/>
          </div>
        </div>
      </div>
      <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black'>
        G<b>a</b>ming
      </h1>
    </div>
  )
}

export default Hero
