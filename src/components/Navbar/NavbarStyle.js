import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled(motion.div)`
    background: ${({ scrollNav }) => (scrollNav ? 'black' : 'transparent')};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;   
    position: fixed;
    width: 100%;
    z-index: 1;
`
export const Logo = styled.img`
    width: 150px;
    left: 0;
    border-radius: 10px;
    cursor: pointer;
    &:hover { 
        opacity: 0.7 
    }
    ${mobile({
    width: '100px'
})}
`
export const Menu = styled.ul`
    display: flex; 
    list-style: none;
`
export const MenuLink = styled(LinkS)`
    margin: 25px;
    color: white; 
    font-size: 25px;
    cursor: pointer;
    &:hover { color: grey }
    &.active {border-bottom: 2px solid red }
    ${mobile({
    display: 'none'
})}
`
export const Button = styled.a`
    display: none;
    color: white;
    cursor: pointer; 
    font-size: 25px;
    ${mobile({
    display: 'fixed'
})}
`