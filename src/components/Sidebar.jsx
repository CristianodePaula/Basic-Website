import React from 'react'
import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

const Container = styled.div`
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
const Menu = styled.ul`
    display: grid;
`
const MenuLink = styled(LinkS)`
    margin: 15px;
    color: white; 
    font-size: 20px;
    cursor: pointer;
    &:hover { color: grey }
    &.active {border-bottom: 2px solid red }
`
export default function Sidebar ({open, alternate}){
    return (
        <Container open={open} alternate={alternate} onClick={alternate}>
            <Menu>
                <MenuLink onClick={alternate} to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Empresa </MenuLink>
                <MenuLink onClick={alternate} to='slider'smooth={true} duration={500} spy={true} exact='true' offset={-80}> Servicos </MenuLink>
                <MenuLink onClick={alternate} to='advertsL'smooth={true} duration={500} spy={true} exact='true' offset={-80}> Planos </MenuLink>
                <MenuLink onClick={alternate} to='gallery'smooth={true} duration={500} spy={true} exact='true' offset={-80}> Galeria </MenuLink>
                <MenuLink onClick={alternate} to='contact'smooth={true} duration={500} spy={true} exact='true' offset={-80}> Contato </MenuLink>
              </Menu>         
        </Container>
)}
