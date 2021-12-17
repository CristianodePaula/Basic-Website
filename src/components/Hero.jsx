import React, { useEffect, useRef }  from 'react'
import styled from 'styled-components'
import moto from '../video/moto.mp4'
import { init } from 'ityped'
import { motion } from 'framer-motion'
import { useScroll } from '../resources/useScroll'
import { heroSliderAnimation } from '../resources/Animations'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
    height: 100vh;
`
const Video = styled.video`
    width: 100%;
    height: 100%;
    filter: brightness(0.3);
    -o-object-fit:cover;
    object-fit: cover;
`
const Text = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    font-size: 25px;
    color: white;
    ${mobile({ top: '20%', height: '60%' })} 
`
const Title = styled(motion.div)`
    position: absolute;
    left:0;
    right:0;
    margin-bottom: 150px;
    font-size: 60px;
    text-shadow: 2px 2px 2px #000;
    ${mobile({ fontSize: '30px'})} 
`
const P = styled.p`
    margin-top: 300px;
    font-size: 30px;
    text-shadow: 2px 2px 2px #f00;
    ${mobile({ fontSize: '20px'})} 
`
export default function Hero (){
    /* Ityped gera passagem de texto através de Ref */
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Trabalhamos com seguros veiculares', 'Conheça nossos serviços e preços!'],
        })
    },[])  

    const[element, controls] = useScroll();

    return (
        <Container ref={element}>
                <Video autoPlay loop muted src={moto}></Video>
            <Text>
                <Title variants={heroSliderAnimation} animate={controls}>Seguradora Duas Rodas</Title>
                <P ref={textRef}></P>
           </Text>
        </Container>
)}