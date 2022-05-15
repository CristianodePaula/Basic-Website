import React from 'react'
import { 
    Container, 
    Menu, 
    MenuLink 
} from './SidebarStyle'

export default function Sidebar({ open, alternate }) {
    return (
        <Container open={open} alternate={alternate} onClick={alternate}>
            <Menu>
                <MenuLink 
                    onClick={alternate} 
                    to='about' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}> Empresa </MenuLink>
                <MenuLink 
                    onClick={alternate} 
                    to='slider' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}> Servicos </MenuLink>
                <MenuLink 
                    onClick={alternate} 
                    to='cards' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}> Planos </MenuLink>
                <MenuLink 
                    onClick={alternate} 
                    to='gallery' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}> Galeria </MenuLink>
                <MenuLink 
                    onClick={alternate} 
                    to='contact' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}> Contato </MenuLink>
            </Menu>
        </Container>
    )
}
