import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'
import { textScroll } from '../../resources/Animations'

export const Container = styled.div`
    height: 100vh;
`
export const Video = styled.video`
    width: 100%;
    height: 100%;
    filter: brightness(0.3);
    -o-object-fit:cover;
    object-fit: cover;
`
export const Text = styled.div`
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
    ${mobile({
    top: '20%',
    height: '60%'
})} 
`
export const Paragraph = styled(motion.p)`
    position: absolute;
    left:0;
    right:0;
    margin-bottom: 150px;
    font-size: 60px;
    text-shadow: 2px 2px 2px #000;
    ${mobile({
    fontSize: '35px'
})} 
`
export const Placard = styled(motion.div)`
    position: absolute;
    height: 50px;
    display: flex;
    overflow: hidden;
    top: 60%;
    right: 40%;
    ${mobile({
        marginRight: "-35px"
    })} 
`
export const Words = styled.div`
    height: 100%;
    animation: ${textScroll} 10s infinite;
`
export const Label = styled.span`
    height: 50px;
    font-size: 45px;
    color: red;
    display: flex;
    align-items: center;
    font-family: 'Roboto Slab', serif;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px white;
    ${mobile({
    fontSize: '27px'
})} 
`