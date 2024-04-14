import Sidebar from '../sidebar/Sidebar'
import './Navbar.scss'
import {motion} from 'framer-motion'



const Navbar = () => {
  return (
    <div className='navbar'>

        {/* sidebar menu */}
        <Sidebar />
        <div className="wrapper">
            <motion.span
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1 }}
            transition={{duration:0.5}}
            
            >
                Bilal Jabbar
            </motion.span>
            <div 
           
            
            className="social">
                <a href=""><img src="/github.png" alt='github' /></a>
                <a href=""><img src="/linkedin.png" alt="linkedin" /></a>
                <a href=""><img src="/tableau.png" alt="tableau" /></a>
            </div>
           
        </div>

    </div>
  )
}

export default Navbar