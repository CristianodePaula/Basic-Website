import React from 'react'
import clients from '../../images/clients.jpg'
import {
    Container,
    Text,
    Title,
    Paragraph,
    Image
} from './AboutStyle'
import { useScroll } from '../../resources/UseScroll'
import {
    aboutTAnimation,
    aboutIAnimation
} from '../../resources/Animations'

export default function About() {

    const [element, controls] = useScroll()

    return (
        <Container id='about' ref={element}>
            <Text variants={aboutTAnimation} animate={controls}>
                <Title>Quem Somos</Title>
                <Paragraph>
                    A seguradora Automotive tem o seguro ideal para o seu veículo.
                    Além de assistência de qualidade, você pode contar com
                    atendimento 24h e benefícios exclusivos. Não importa em que lugar
                    esteja, estaremos lá. Confira as melhores condições para
                    você renovar o seguro do seu veículo, seja ele carro, moto,
                    pick up ou caminhão.
                </Paragraph>
            </Text>
            <Image src={clients} variants={aboutIAnimation} animate={controls} />
        </Container>
    )
}
