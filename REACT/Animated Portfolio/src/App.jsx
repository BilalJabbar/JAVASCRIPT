import './app.scss'
import Contact from './component/contact/Contact'
import Cursor from './component/cursor/Cursor'
import Hero from './component/hero/Hero'
import Navbar from './component/navbar/Navbar'
import Parallax from './component/parallax/Parallax'
import Portfolio from './component/portfolio/Portfolio'
import Services from './component/services/Services'



const App = () => {
  return (
    <div>
    <Cursor />
        <section id='Homepage'>
        <Navbar/>
        <Hero />
    </section>
    <section id='Services'>
    <Parallax type='services' />
    </section>
    <section>
      <Services />
    </section>
    <section id='Portfolio'><Parallax type='porfolio' /></section>
    <Portfolio />

    <section id='Contact'>
      <Contact />
    </section>
    
    </div>
  )
}

export default App