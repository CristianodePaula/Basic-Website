import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'
import { motion } from 'framer-motion'

export const Container = styled.div`
    height: 90vh;
    background: #e1e1e1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 60px;
    overflow: hidden;
    ${mobile({
    display: 'grid',
})} 
`
export const Text = styled(motion.div)`
    text-align: center;
    width: 600px;
    ${mobile({
    margin: '-20px 0px 20px 0px',
    width: '360px',
})} 
`
export const Title = styled.h1`
    font-size: 40px;
    ${mobile({
    fontSize: '25px',
})} 
`
export const Paragraph = styled.p`
    font-size: 25px;
    padding: 30px;
    ${mobile({
    fontSize: '15px',
    padding: '10px'
})}
`
export const Image = styled(motion.img)`
    height: 450px;    
    width: 500px;
    border-radius: 10px;
    ${mobile({
    height: '260px',
    width: '360px'
})}
`