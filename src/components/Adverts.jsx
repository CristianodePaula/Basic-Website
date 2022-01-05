import React from 'react'
import styled from 'styled-components'
import { DataAdverts } from '../resources/Data'
import { motion } from 'framer-motion' 
import { useScroll } from '../resources/useScroll'
import { advertsGAnimation, advertsCAnimation, advertsIAnimation } from '../resources/Animations'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
    height: 90vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    ${mobile({height: '600px'})}
`
const Gallery = styled(motion.div)`
    display: flex;   
    justify-content: center;
    ${mobile({ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop:'-100px'})}
`
const ImageInfo = styled(motion.div)`
    margin: 20px 0 20px 0;
    &:hover { opacity: 0.7; transform: scale(1.08); transition: all 0.3s ease } 
`
const Image = styled(motion.img)`
    height: 440px;
    width: 280px;
    object-fit: cover;
    margin: 20px;
    border-radius: 30px;
    ${mobile({ height: '220px', width:'160px', margin: '30px'})}
`
const Info = styled(motion.div)`
    text-align: center;
    margin-top: -140px;
`
const H1 = styled.h1`
    color: white;
    font-size: 20px;
    ${mobile({ fontSize: '16px'})}
`
const Button = styled.button`
    background: darkred;
    font-size: 14px;
    color: white;
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    ${mobile({ fontSize: '10px', padding: '4px'})}
`
export default function Adverts () {

    const[element, controls] = useScroll();

    return (
        <Container id='advertsL' ref={element}>
            <Gallery variants={advertsGAnimation} animate={controls} >  
            {DataAdverts.map((image, index) => ( 
                <div key={index} > 
                    <ImageInfo whileHover={{ transition: {scale: 1.1, type: "tween", ease: "easeOut"}}} >    
                    <Image src={image.imageUrl} variants={advertsIAnimation} />
                    <Info variants={advertsCAnimation} >                
                    <H1>{image.title}</H1>
                    <Button>R${image.price}</Button>
                    </Info>
                    </ImageInfo>
                </div>  
                ))}   
            </Gallery>
        </Container>
)}