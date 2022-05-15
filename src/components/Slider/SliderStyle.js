import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
    height: 90vh;
    background-color: black;
    display: flex;
    position: relative; 
    overflow: hidden;
    ${mobile({
    height: "45vh"
})}
`
export const Arrow = styled.a`
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 1;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    ${mobile({
    width: "20px",
    height: "20px"
})}
`
export const Sliders = styled.div`
    display: flex;
    position: aboslute;
    justify-content: center;
    text-align: center;
    transition: all 1.5s ease;
    color: white;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`
export const Image = styled(motion.img)`
    top: 0;
    left: 0;
    width: 100vw;
    height: 90vh;    
    object-fit: cover;
    background-color: black;
    ${mobile({
    height: "45vh"
})}   
`
export const Title = styled(motion.h1)`
    position: absolute;
    top: 10px;
    margin-left: 100px;
    font-size: 45px;
    text-shadow: 10px 10px 10px black;
    ${mobile({
    fontSize: '24px',
    marginLeft: '1rem',
    top: "30px"
})}
`
export const Paragraph = styled(motion.p)`
    position: absolute;
    bottom: 60px;
    margin-left: 100px;
    font-size: 35px;
    text-shadow: 10px 10px 10px black;
    font-family: 'Lato', sans-serif;
    ${mobile({
    fontSize: '15px',
    marginLeft: '1rem'
})}
`