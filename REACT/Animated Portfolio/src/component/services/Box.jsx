import {motion} from 'framer-motion'
import './services.scss'



const Box = () => {
  return (
    <motion.div className="box" whileHover={{background: "lightgray", color: "black"}} >
          <motion.h2 className="heading"  >Branding</motion.h2>
          <motion.p className="description" >Lorem ipsum dolor. Aliquam necessitatibus saepe sint veritatis dolor natus, deserunt quod doloribus. Rem, minima cum magni voluptatem  quaerat.
          </motion.p>
          <motion.button >Go</motion.button>
        </motion.div>
  )
}

export default Box