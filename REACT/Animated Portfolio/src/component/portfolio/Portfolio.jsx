import './portfolio.scss'
import { useRef } from 'react';
import {motion, useSpring, useScroll, useTransform} from 'framer-motion'


const portfolios = [
    {
      id: 1,
      title: 'Portfolio 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.', 
      img: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2, 
      title: 'Portfolio 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: 'Portfolio 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      img: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: 'Portfolio 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      img: "https://images.pexels.com/photos/11035482/pexels-photo-11035482.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];


  const SinglePortfolio = ({portfolio}) => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({
      target: ref,
    })
    const y = useTransform(
      scrollYProgress ,
      [0, 1],
      [-200, 200]
    )
    return (
      <section>

        <div className="container">
          <div className="wrapper">
            <div className="imageContainer"  ref={ref}>
          <img src={portfolio.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{portfolio.title}</h2>
            <p>{portfolio.description}</p>
            <button>See Demo</button>
          </motion.div>
          </div>
        </div>

      </section>
    )
  }

const Portfolio = () => {

    const ref = useRef()


    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["end end", "start start"]
    })

    const scaleX = useSpring(
      scrollYProgress , { stiffness: 100, damping: 30}
    )

  return (
    <div className='porfolio' ref={ref}>

        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>

        {portfolios.map((portfolio) => (
          <SinglePortfolio portfolio={portfolio} key={portfolio.id} />
        ))}

    </div>
  )
}

export default Portfolio