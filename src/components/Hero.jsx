import React  from 'react'
import styled from 'styled-components'
import moto from '../video/moto.mp4'
import { motion } from 'framer-motion'
import { useScroll } from '../resources/useScroll'
import { heroAnimation, heroTAnimation,  textScroll } from '../resources/Animations'
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
const Paragraph = styled(motion.div)`
    position: absolute;
    left:0;
    right:0;
    margin-bottom: 150px;
    font-size: 60px;
    text-shadow: 2px 2px 2px #000;
    ${mobile({ fontSize: '30px'})} 
`
const Title = styled(motion.div)`
    position: absolute;
    height: 50px;
    display: flex;
    overflow: hidden;
    top: 55%;
    right: 45%;
`
const TitleWrapper = styled(motion.div)`
    height: 100%;
    animation: ${textScroll} 10s infinite;
`
const TitleItem = styled.div`
    height: 50px;
    font-size: 40px;
    font-weight: bold;
    color: red;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px white;
    ${mobile({ fontSize: '20px'})} 
`
export default function Hero (){
   
    const[element, controls] = useScroll();

    return (
        <Container ref={element}>
            <Video autoPlay loop muted src={moto}></Video>
            <Text>
                <Paragraph variants={heroAnimation} animate={controls}>Seguradora Duas Rodas</Paragraph>
           </Text>
           <Title variants={heroTAnimation} animate={controls}>
                <TitleWrapper >
                    <TitleItem>Seguradora</TitleItem>
                    <TitleItem>Revendedora</TitleItem>
                    <TitleItem>Locadora</TitleItem>
                    <TitleItem>Transportadora</TitleItem>
                </TitleWrapper>
            </Title>
        </Container>
)}