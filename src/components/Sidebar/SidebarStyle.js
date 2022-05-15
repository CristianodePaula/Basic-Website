import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const Container = styled.div`
    text-align: center;
    justify-content: center;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: black;
    display: grid;
    align-items: center;
    transition: 0.3s ease-in-out;
    opacity: ${({ open }) => (open ? '100%' : '0')}; 
    top: ${({ open }) => (open ? '0%' : '-100%')}; 
`
export const Menu = styled.ul`
    display: grid;
`
export const MenuLink = styled(LinkS)`
    margin: 15px;
    color: white; 
    font-size: 20px;
    cursor: pointer;
    &:hover { 
        color: grey 
    }
    &.active {
        border-bottom: 2px solid red 
    }
`