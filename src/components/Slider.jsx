import React, {useState } from 'react'
import styled from 'styled-components'
import { dataSlide } from '../resources/Data' 
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import { motion} from 'framer-motion'
import { useScroll } from '../resources/useScroll'
import { sliderAnimation, txtSlideAnimation } from '../resources/Animations'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
    height: 90vh;
    background-color: black;
    display: flex;
    position: relative; 
    overflow: hidden;
    ${mobile({ height: "45vh"})}
`
const Wrapper = styled(motion.div)`
`
const Arrow = styled.a`
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
    ${mobile({ width: "20px", height: "20px"})}
`
const Sliders = styled.div`
    display: flex;
    position: aboslute;
    justify-content: center;
    text-align: center;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    color: white;
    h1 {     
        position: absolute;
        top: 10px;
        margin-left: 100px;
        font-size: 45px;
        text-shadow: 10px 10px 10px black;
        ${mobile({ fontSize: '24px', marginLeft: '1rem', top: "30px"})}
    }
    p {
        position: absolute;
        bottom: 60px;
        margin-left: 100px;
        font-size: 35px;
        text-shadow: 10px 10px 10px black;
        ${mobile({ fontSize: '15px', marginLeft: '1rem'})}
    }
`
const Image = styled(motion.img)`
    top: 0;
    left: 0;
    width: 100vw;
    height: 90vh;    
    object-fit: cover;
    background-color: black;
    ${mobile({ height: "45vh"})}   
`
export default function Slider(){
 
    const [slideIndex, setSlideIndex] = useState(0);
   
    const handleClick = (direction) => {
        if (direction === "left") {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
        } else {
          setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
        }
    }

    const[element, controls] = useScroll();

    return (
        <Container id='slider' ref={element}>     
           <Wrapper variants={sliderAnimation} animate={controls}> 
            <Arrow direction="left" onClick={()=> handleClick("left")}><FaAngleDoubleLeft/></Arrow>
              <Sliders slideIndex={slideIndex} >      
               {dataSlide.map((images, index)=>(
               <div key={index}>
                <Image src={images.imageUrl}/>  
                <motion.h1 variants={txtSlideAnimation} animate={controls}>{images.title}</motion.h1> 
                <motion.p variants={txtSlideAnimation} animate={controls}>{images.desc}</motion.p>
               </div> 
            ))}   
              </Sliders>            
            <Arrow direction="right" onClick={()=> handleClick("right")}><FaAngleDoubleRight/></Arrow>
            </Wrapper>         
        </Container>
)}