import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useScroll } from '../resources/useScroll'
import { opacityAnimation, footerBAnimation, footerTAnimation } from '../resources/Animations'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${mobile({padding: '10px', gridTemplateColumns: 'repeat(2, 1fr)'})} 
`
const Desc = styled.div`
    padding: 0 2rem;    
    h1 {font-size: 25px; margin-bottom: 1rem; color: #f26e2e }
    p { color: red; animation: ${opacityAnimation} 3s infinite }
    ${mobile({marginLeft: '15px'})} 
`
const Items = styled(motion.div)    `
    display: flex;
    flex-direction: column;
    align-item: flex-start;
    padding: 0 2rem;
    ${mobile({padding: '0 3rem'})}  
`
const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 1rem;
    ${mobile({fontSize: '12px'})}
`
const Link = styled.div`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;
    &:hover { color:  #f26e2e }
    ${mobile({fontSize: '12px'})} 
`  
const Icon = styled.a`
    font-size: 20px;
    cursor: pointer;    
    color: darkblue;
    &:hover { color:  #f26e2e }
    ${mobile({fontSize: '16px'})}
`
export default function Footer(){

    const[element, controls] = useScroll(); 

    return (
        <Container ref={element}>
                <Desc>
                    <h1>Explorar</h1>
                    <p>Conheça melhor a nossa página</p>
                </Desc>
                <Items variants={footerBAnimation} animate={controls}>
                    <Title >Contate-nos</Title>
                    <Link to='/'>Contato</Link>
                    <Link to='/'>Suporte</Link>
                    <Link to='/'>Qualificações</Link>
                    <Link to='/'>Premiações</Link>
                </Items>
                <Items variants={footerTAnimation} animate={controls}>
                    <Title>Parcerias</Title>
                    <Link to='/'>RedCar</Link>
                    <Link to='/'>SuperVeículos</Link>
                    <Link to='/'>SegurosVida</Link>
                    <Link to='/'>MegaRoda</Link>
                </Items>
                <Items variants={footerBAnimation} animate={controls}>
                    <Title>Redes Sociais</Title>
                    <Icon><FaFacebook/></Icon>
                    <Icon><FaInstagram/></Icon>
                    <Icon><FaTwitter/></Icon>
                    <Icon><FaYoutube/></Icon>  
                </Items>
        </Container>
)}
