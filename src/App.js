import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Slider from './components/Slider'
import Adverts from './components/Adverts'
import ImgGallery from './components/ImgGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion } from "framer-motion"

export default function App() {
  
  const [open, setOpen] = useState(false)
  const alternate = () => {
      setOpen(!open)
  }
  return (
    <motion.div initial='hidden' animation='show'>  
        <Navbar alternate={alternate}/>
        <Sidebar open={open} alternate={alternate} />
        <Hero /> 
        <About />
        <Slider />
        <Adverts />
        <ImgGallery/>
        <Contact />
        <Footer />    
    </motion.div>
)} 
