import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'
import { opacityAnimation } from '../../resources/Animations'

export const Container = styled.div`
    padding: 15px;
    display: grid;
    background: black;
    grid-template-columns: repeat(4, 1fr);
    ${mobile({
    padding: '10px',
    gridTemplateColumns: 'repeat(2, 1fr)'
})} 
`
export const Desc = styled.div`
    padding: 0 2rem;    
    ${mobile({
    marginLeft: '15px',
    marginTop: '-15px'
})} 
`
export const TitleP = styled.h1`
    font-size: 25px; 
    font-family: 'Roboto Slab', serif;
    margin-bottom: 1rem; 
    color: #f26e2e 
`
export const Paragraph = styled.p`
    color: red; 
    font-size: 17px; 
    font-family: 'Roboto Slab', serif;
    animation: ${opacityAnimation} 3s infinite; 
`
export const Box = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-item: flex-start;
    padding: 0 2rem;
    ${mobile({
    padding: '0 3rem'
})}  
`
export const Title = styled.h2`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 1rem;
    color: grey;
    ${mobile({
    fontSize: '12px'
})}
`
export const Link = styled.p`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;
    color: white;
    &:hover { 
        color:  #f26e2e 
    }
    ${mobile({
    fontSize: '12px'
})} 
`
export const Icon = styled.a`
    font-size: 20px;
    cursor: pointer;  
    color: white;
    &:hover { 
        color: #f26e2e
    }
    ${mobile({
    margin: '1.2px',
    fontSize: '16px'
})}
`