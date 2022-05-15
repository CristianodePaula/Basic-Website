import React from 'react'
import {
    Container,
    Form,
    Title,
    Input,
    TextArea,
    Button
} from './ContactStyle'
import emailjs from '@emailjs/browser'
import { useScroll } from '../../resources/UseScroll'
import { contactAnimation } from '../../resources/Animations'

export default function Contact() {

    const [element, controls] = useScroll()

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
        ).then((res) => {
            console.log(res)
        }).catch(err => console.log(err))
    }

    return (
        <Container id='contact' ref={element}>
            <Form onSubmit={sendEmail} variants={contactAnimation} animate={controls}>
                <Title>Entre em Contato</Title>
                <Input type='text' placeholder='Nome' />
                <Input type='email' placeholder='Email' />
                <TextArea placeholder='Escreva sua Menssagem' />
                <Button>Enviar</Button>
            </Form>
        </Container>
    )
}    
