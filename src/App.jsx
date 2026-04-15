import Navbar from './components/Navbar/Navbar'
import './components/Navbar/Navbar.css'

import Hero from './components/Hero/Hero'
import './components/Hero/Hero.css'

import Gallery from './components/Gallery/Gallery'
import './components/Gallery/Gallery.css'

import About from './components/About/About'
import './components/About/About.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="hero-stripe">
        <div className="stripe-r"></div>
        <div className="stripe-y"></div>
        <div className="stripe-b"></div>
      </div>
      <Gallery />
      <About />
    </div>
  )
}

export default App