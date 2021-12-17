import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import logo from '../img/logo.jpg' 
import { FaBars } from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { motion } from 'framer-motion'
import { useScroll } from '../resources/useScroll'
import { navbarAnimation } from '../resources/Animations'
import { mobile } from '../resources/Responsive'

const Container = styled(motion.div)`
    background: ${({ scrollNav }) => (scrollNav ? 'black' : 'transparent')};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;   
    position: fixed;
    width: 100%;
    z-index: 1;
`
const Icon = styled.img`
    width: 150px;
    left: 0;
    border-radius: 10px;
    cursor: pointer;
    &:hover { opacity: 0.7 }
`
const Menu = styled.ul`
    display: flex; 
    list-style: none;
`
const MenuLink = styled(LinkS)`
    margin: 25px;
    color: white; 
    font-size: 25px;
    cursor: pointer;
    &:hover { color: grey }
    &.active {border-bottom: 2px solid red }
    ${mobile({ display: 'none' })}
`
const ButtonS = styled.a`
    display: none;
    color: white;
    cursor: pointer; 
    font-size: 25px;
    ${mobile({ display: 'fixed' })}
`
export default function Navbar ({open, alternate}) {

    const [scrollNav, setScrollNav] = useState(false) 

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
  
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },  [])

    const returnTop = () => {
        scroll.scrollToTop()
    }

    const[element, controls] = useScroll();
 
    return (
        <Container scrollNav={scrollNav} ref={element} variants={navbarAnimation} animate={controls} >  
            <Icon src={logo} onClick={returnTop}></Icon>
            <Menu>
                <MenuLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Empresa </MenuLink>
                <MenuLink to='slider' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Planos </MenuLink>
                <MenuLink to='advertsL' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Servicos </MenuLink>
                <MenuLink to='gallery' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Galeria </MenuLink>
                <MenuLink to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Contato </MenuLink>
            </Menu>
            <ButtonS open={open} onClick={alternate} ><FaBars /></ButtonS>
        </Container>
)}
