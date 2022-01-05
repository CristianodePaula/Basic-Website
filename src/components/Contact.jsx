import React from 'react'
import styled from 'styled-components'
import contacts from '../img/contacts.jpg'
import { motion } from 'framer-motion' 
import { useScroll } from '../resources/useScroll'
import { contactAnimation } from '../resources/Animations'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
    position: relative;
    height: 63vh;
    background:url(${contacts});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    ${mobile({ height: "50vh" })}
`
const Form = styled(motion.div)`
    background: rgba(0, 0, 0, 0.3);
    width: 400px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top:0;
    left: 0;
    right:0;
    bottom: 0;
    margin: auto;
    border-radius: 20px;   
    ${mobile({ width: '350px', height: '280px' })}
`
const Title = styled.div`
    color: white;
    margin: 10px;
    font-size: 20px;
    ${mobile({  fontSize: '15px' })}
`
const Input = styled.input`
    width: 350px;
    height: 35x;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    ${mobile({ width: '250px', height: '30px' })}
`
const TextArea = styled.textarea`
    width: 350px;
    height: 150px;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    ${mobile({ width: '250px', height: '100px' })}
`
const Button = styled.button`
    background: red;
    color: white;
    width: 90px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover{background: darkred;}
    ${mobile({ width: '70px', height: '25px' })}
`
export default function Contact(){

    const[element, controls] = useScroll(); 

    return (
        <Container id='contact' ref={element}> 
        <Form variants={contactAnimation} animate={controls}>    
            <Title>Entre em Contato</Title>
            <Input placeholder='Nome' />
            <Input placeholder='Email' />        
            <TextArea placeholder='Escreva sua Menssagem'/>
            <Button>Enviar</Button>
        </Form>
        </Container>
)}    
