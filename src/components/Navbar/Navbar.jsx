import React, { useState, useEffect } from 'react'
import {
    Container,
    Logo,
    Menu,
    MenuLink,
    Button
} from './NavbarStyle'
import logo from '../../images/logo.png'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { useScroll } from '../../resources/UseScroll'
import { navbarAnimation } from '../../resources/Animations'

export default function Navbar({ open, alternate }) {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const returnTop = () => {
        scroll.scrollToTop()
    }

    const [element, controls] = useScroll()

    return (
        <Container scrollNav={scrollNav} ref={element} variants={navbarAnimation} animate={controls}>
            <Logo src={logo} onClick={returnTop}></Logo>
            <Menu>
                <MenuLink 
                    to='about' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}> Empresa </MenuLink>
                <MenuLink 
                    to='slider' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}> Serviços </MenuLink>
                <MenuLink 
                    to='cards' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}> Seguros </MenuLink>
                <MenuLink 
                    to='gallery' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}> Galeria</MenuLink>
                <MenuLink 
                    to='contact' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}> Contato </MenuLink>
            </Menu>
            <Button open={open} onClick={alternate} ><FaBars /></Button>
        </Container>
    )
}
