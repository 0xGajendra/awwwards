import React from 'react'
import { motion } from "motion/react"

const duration = 0.25;
const Stagger = 0.025;

const RevealLink = ({children}) => {
  return (
    <motion.div
        initial="initial"
        whileHover="hovered"
    >
      <div>
        {children.split('').map((l,i) => {
          return <motion.span
          className='inline-block'
          variants={{
            initial:{
              y:0,
            },
            hovered: {
              y: "-100%"
            }
          }}
          transition={{
            duration: duration,
            ease: "easeInOut",
            delay: Stagger*i
          }}
          key={i}>{l}</motion.span>
        })}
      </div>
      <div
      className='absolute inset-0'
        variants={{
          initial: {y:"100%"},
          hovered:{y:0},
        }}
      >{children.split('').map((l,i) => {
        return <motion.span
        className='inline-block'
        variants={{
          initial:{
            y:"100%",
          },
          hovered: {
            y: 0
          }
        }}
        
        transition={{
          duration: duration,
          ease: "easeInOut",
          delay: Stagger*i
        }}
        key={i}>{l}</motion.span>
      })}
      </div>
    </motion.div>
  )
}

export default RevealLink
