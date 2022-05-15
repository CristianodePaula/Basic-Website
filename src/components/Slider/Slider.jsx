import React, { useState } from 'react'
import {
    Container,
    Arrow, 
    Sliders, 
    Image, 
    Title, 
    Paragraph
} from './SliderStyle'
import { dataSlide } from '../../data/Data'
import { 
    FaAngleDoubleLeft, 
    FaAngleDoubleRight 
} from 'react-icons/fa'
import { useScroll } from '../../resources/UseScroll'
import { sliderAnimation } from '../../resources/Animations'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }

    const [element, controls] = useScroll()

    return (
        <Container id='slider' ref={element}>
            <Arrow direction="left" onClick={() => handleClick("left")}><FaAngleDoubleLeft /></Arrow>
            <Sliders slideIndex={slideIndex}>
                {dataSlide.map((images, index) => (
                    <div key={index}>
                        <Image src={images.imageUrl} />
                        <Title variants={sliderAnimation} animate={controls}>{images.title}</Title>
                        <Paragraph variants={sliderAnimation} animate={controls}>{images.desc}</Paragraph>
                    </div>
                ))}
            </Sliders>
            <Arrow direction="right" onClick={() => handleClick("right")}><FaAngleDoubleRight /></Arrow>
        </Container>
    )
}