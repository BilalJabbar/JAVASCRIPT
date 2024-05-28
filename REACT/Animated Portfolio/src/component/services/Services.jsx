import { useRef } from 'react'
import Box from './Box'
import './services.scss'
import {motion, useInView} from 'framer-motion'


const variants ={
  initial:{
    x:-500,
    opacity:0,
    
  },
  animate:{
    x:0,
    
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton:{
    opacity: 0,
    y: 10,
    transition:{
      duration: 2,
      repeat: Infinity
    }
  }
}

const Services = () => {

  const ref = useRef()
  const isInView = useInView(ref,{margin: "-100px"})

  return (
    
    <motion.div className='services' variants={variants} initial='initial' ref={ref} animate={'animate'}>

      <motion.div className='textContainer' variants={variants}>
        
          <p>I focus on helping your brand grow <br />and move forward</p>
          <hr />
        
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
      <div className="title">
      <img src="/people.webp" alt="" />
        <h1><b>Unique</b> Ideas</h1>
      </div>
      <div className="title">
        <h1><b>For Your</b> Business.</h1>
        <button>What We Do?</button>
      </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants} >
        <Box />
        <Box />
        <Box />
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
          <h2 className="heading">Branding</h2>
          <p className="description">Lorem ipsum dolor. Aliquam necessitatibus saepe sint veritatis dolor natus, deserunt quod doloribus. Rem, minima cum magni voluptatem  quaerat.
          </p>
          <button>Go</button>
        </motion.div>
       
      </motion.div>


    </motion.div>






  )
}

export default Services