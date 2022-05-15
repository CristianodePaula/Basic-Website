import React from 'react'
import { 
    Container, 
    Desc, 
    TitleP, 
    Paragraph, 
    Box, 
    Title, 
    Link, 
    Icon
} from './FooterStyle'
import { 
    FaFacebook, 
    FaInstagram, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa'
import { useScroll } from '../../resources/UseScroll'
import { 
    footerBAnimation, 
    footerTAnimation 
} from '../../resources/Animations'

export default function Footer() {

    const [element, controls] = useScroll()

    return (
        <Container ref={element}>
            <Desc>
                <TitleP variants={footerTAnimation} animate={controls}>Explorar</TitleP>
                <Paragraph variants={footerTAnimation} animate={controls}>Conheça melhor a nossa página</Paragraph>
            </Desc>
            <Box variants={footerBAnimation} animate={controls}>
                <Title>Contate-nos</Title>
                <Link to='/'>Contato</Link>
                <Link to='/'>Suporte</Link>
                <Link to='/'>Qualificações</Link>
                <Link to='/'>Premiações</Link>
            </Box>
            <Box variants={footerTAnimation} animate={controls}>
                <Title>Parcerias</Title>
                <Link to='/'>RedCar</Link>
                <Link to='/'>SuperVeículos</Link>
                <Link to='/'>SegurosVida</Link>
                <Link to='/'>MegaRoda</Link>
            </Box>
            <Box variants={footerBAnimation} animate={controls}>
                <Title>Redes Sociais</Title>
                <Icon><FaFacebook /></Icon>
                <Icon><FaInstagram /></Icon>
                <Icon><FaTwitter /></Icon>
                <Icon><FaYoutube /></Icon>
            </Box>
        </Container>
    )
}
