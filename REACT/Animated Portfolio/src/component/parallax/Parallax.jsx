import './parallax.scss'
import {motion, useTransform, useScroll} from 'framer-motion'
import { useRef } from 'react'



const Parallax = ({type}) => {

  const ref = useRef(null)

  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["start start", "end start"]
  })

  const yBgText = useTransform(
    scrollYProgress ,
    [0, 1], ['0%', '500%']
  )
  
  const yBgPlanets = useTransform(
    scrollYProgress ,
    [0,1],
    ['0%','100%']
  )
 
  return (
  
    <motion.div className='parallax'
    ref={ref}
    style={{background:type=='services'? 
                                        'linear-gradient(180deg, #111132, #0c0c1d'  :
                                        'linear-gradient(180deg, #111132, #505064'
    }}
    >
        
        <motion.h1
        style={{y:yBgText}} 
        >{type=='services'? 'What We Do?':'What We Did?'}</motion.h1>
        <motion.div className='mountains'></motion.div>
        <motion.div className='planets' style={{
            y:yBgPlanets, backgroundImage: `url(${type=='services'?'planets.png':'sun.png '})`
            }}></motion.div>
        <motion.div className='stars' style={{x: yBgPlanets}}></motion.div>

    </motion.div>
    
  )
}

export default Parallax