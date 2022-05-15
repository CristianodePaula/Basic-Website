import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Slider from './components/Slider/Slider'
import Cards from './components/Cards/Cards'
import ImageGallery  from './components/ImageGallery/ImageGallery'        
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { motion } from "framer-motion"

export default function App() {

    const [open, setOpen] = useState(false)
    const alternate = () => {
        setOpen(!open)
    }
    return (
        <motion.div initial='hidden' animation='show'>
            <Navbar alternate={alternate} />
            <Sidebar open={open} alternate={alternate} />
            <Header />
            <About />
            <Slider />
            <Cards />
            <ImageGallery />
            <Contact />
            <Footer />
        </motion.div>
    )
} 
