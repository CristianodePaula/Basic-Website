import React from 'react'
import styled from 'styled-components'
import { DataAdverts } from '../resources/Data'
import { motion } from 'framer-motion' 
import { useScroll } from '../resources/useScroll'
import { cardsAnimation } from '../resources/Animations'
import { mobile } from '../resources/Responsive'

const Container = styled(motion.div)`
    height: 90vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    ${mobile({height: '500px'})}
`
const Gallery = styled(motion.div)`
    display: flex;   
    justify-content: center;
    margin-top: -40px;    
    ${mobile({ display: 'grid', gridTemplateColumns: '220px 1fr'})}
`
const Img = styled.img`
    height: 440px;
    width: 280px;
    object-fit: cover;
    margin: 20px;
    border-radius: 30px;
    &:hover { opacity: 0.7; transform: scale(1.08); transition: all 0.3s ease }
    ${mobile({ height: '220px', width:'160px', margin: '30px'})}
`
const Info = styled.div`
    text-align: center;
    margin-top: -140px;
`
const H1 = styled.h1`
    color: white;
    font-size: 20px;
    ${mobile({ fontSize: '18px'})}
`
const Button = styled.button`
    background: darkred;
    font-size: 14px;
    color: white;
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    ${mobile({ fontSize: '10px', padding: '2px'})}
`
export default function Adverts () {

    const[element, controls] = useScroll();

    return (
        <Container id='advertsL' ref={element}>
            <Gallery variants={cardsAnimation} animate={controls} >  
            {DataAdverts.map((image, index) => ( 
                <div key={index} > 
                    <Img src={image.imageUrl}/>
                    <Info>                
                    <H1>{image.title}</H1>
                    <Button>R${image.price}</Button>
                    </Info>
                </div>  
                ))}   
            </Gallery>
        </Container>
)}
