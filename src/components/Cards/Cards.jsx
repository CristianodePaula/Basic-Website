import React from 'react'
import {
    Container,
    Gallery,
    ImageInfo,
    Image,
    Info,
    Title,
    Paragraph,
    Button
} from './CardsStyle'
import { dataCards } from '../../data/Data'
import { useScroll } from '../../resources/UseScroll'
import {
    cardsGAnimation,
    cardsCAnimation,
    cardsIAnimation
} from '../../resources/Animations'

export default function Adverts() {

    const [element, controls] = useScroll()

    return (
        <Container id='cards' ref={element}>
            <Gallery variants={cardsGAnimation} animate={controls} >
                {dataCards.map((image, index) => (
                    <div key={index} >
                        <ImageInfo whileHover={{ transition: { scale: 1.1, type: "tween", ease: "easeOut" } }} >
                            <Image src={image.imageUrl} variants={cardsIAnimation} />
                            <Info variants={cardsCAnimation} >
                                <Title>{image.title}</Title>
                                <Paragraph>A partir de</Paragraph>
                                <Button>R${image.price}</Button>
                            </Info>
                        </ImageInfo>
                    </div>
                ))}
            </Gallery>
        </Container>
    )
}