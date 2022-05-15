import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'
import { motion } from 'framer-motion'

export const Container = styled.div`
    height: 90vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`
export const Gallery = styled(motion.div)`
    display: flex; 
    margin-top: -10vh;
    ${mobile({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    marginTop: '-30px',
})}
`
export const ImageInfo = styled.div`
    &:hover { 
        opacity: 0.7; 
        transform: scale(1.08); 
        transition: all 0.5s ease;
    } 
`
export const Image = styled(motion.img)`
    height: 420px;
    width: 260px;
    margin: 30px;
    border-radius: 30px;
    object-fit: cover;
    ${mobile({
    height: '240px',
    width: '170px',
})}
`
export const Info = styled(motion.div)`
    text-align: center;
    margin-top: -200px;
    ${mobile({
    marginTop: '-160px'
})}
`
export const Title = styled.h1`
    font-size: 25px;
    color: white;
    text-shadow: 10px 10px 10px black;
    ${mobile({
    fontSize: '16px'
})}
`
export const Paragraph = styled.p`
    font-size: 20px;
    color: white;
    text-shadow: 10px 10px 10px black;
    ${mobile({
    fontSize: '16px'
})}
`
export const Button = styled.button`
    background: darkred;
    font-size: 15px;
    color: white;
    padding: 8px;
    margin: 20px;
    border-radius: 10px;
    border: 1px solid;
    cursor: pointer;
    ${mobile({
    fontSize: '10px',
    padding: '4px'
})}
`