import React from 'react'
import {
    Container,
    Video,
    Text,
    Paragraph,
    Words,
    Placard,
    Label
} from './HeaderStyle'
import moto from '../../videos/back.mp4'
import { useScroll } from '../../resources/UseScroll'
import {
    headerAnimation,
    headerTAnimation
} from '../../resources/Animations'

export default function Hero() {

    const [element, controls] = useScroll()

    return (
        <Container ref={element}>
            <Video autoPlay loop muted src={moto}></Video>
            <Text>
                <Paragraph variants={headerAnimation} animate={controls}>Seguradora Automotive</Paragraph>
            </Text>
            <Placard variants={headerTAnimation} animate={controls}>
                <Words>
                    <Label>Segurança</Label>
                    <Label>Cobertura 24hrs</Label>
                    <Label>Praticidade</Label>
                    <Label>Alto padrão</Label>
                </Words>
            </Placard>
        </Container>
    )
}