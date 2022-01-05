import React from 'react'
import styled from 'styled-components'
import clients from '../img/clients.jpg'
import { motion } from 'framer-motion' 
import { useScroll } from '../resources/useScroll'
import { aboutTAnimation,  aboutIAnimation } from '../resources/Animations'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
    height: 90vh;
    background: #e1e1e1;
    display: flex;
    align-items: center;
    padding: 60px;
    overflow: hidden;
    ${mobile({ display: 'grid'})} 
`
const Text = styled(motion.div)`
    margin: 40px;
    text-align: center;
    ${mobile({ marginBottom: '10px'})} 
`
const H1 = styled.h1`
    font-size: 40px;
    ${mobile({ fontSize: '25px', marginTop: '-80px', marginBottom: '25px'})} 
`
const P = styled.p`
    font-size: 30px;
    padding: 30px;
    ${mobile({ fontSize: '14px',  padding: '0'})}
`
const Img = styled(motion.img)`
    height: 450px;    
    width: 650px;
    border-radius: 10px;
    ${mobile({ height: '260px', width: '360px'})}
`
export default function About (){
    
    const[element, controls] = useScroll();

    return (
        <Container id='about' ref={element}>
            <Text variants={aboutTAnimation} animate={controls}>
                <H1>Quem Somos</H1>
                    <P>
                    A seguradora Duas Rodas tem o seguro ideal para o seu carro. 
                    Além de assistência de qualidade, você pode contar com 
                    atendimento 24h e benefícios exclusivos. E ainda pode parcelar
                    em até 12x sem juros. Também tem as melhores condições para 
                    você renovar o seguro do seu veículo, seja ele carro, moto,
                    utilitário ou caminhão.
                    </P>
            </Text>
                    <Img src={clients} variants={aboutIAnimation} animate={controls}/>
        </Container>
)}
