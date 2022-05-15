import styled from 'styled-components'
import contacts from '../../images/contacts.jpg'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
    position: relative;
    height: 63vh;
    background:url(${contacts});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    ${mobile({
    height: "50vh"
})}
`
export const Form = styled(motion.form)`
    background: rgba(0, 0, 0, 0.3);
    width: 450px;
    height: 360px;
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
    ${mobile({
    width: '350px',
    height: '280px'
})}
`
export const Title = styled.h1`
    color: white;
    margin-top: 10px;
    font-size: 20px;
    ${mobile({
    fontSize: '15px'
})}
`
export const Input = styled.input`
    width: 380px;
    margin: 10px;
    padding: 10px;
    border: 0px;
    border-radius: 10px;
    font-size: 15px;
    outline: 0px;
    ${mobile({
    width: '280px',
    height: '30px',
    fontSize: '10px'
})}
`
export const TextArea = styled.textarea`
    width: 380px;
    height: 250px;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    font-size: 15px;
    resize: none;
    outline: 0px;
    ${mobile({
    width: '280px',
    height: '100px',
    fontSize: '10px'
})}
`
export const Button = styled.button`
    background: red;
    width: 100px;
    height: 70px;
    border: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    color: white;
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background: darkred;
    }
    ${mobile({
    width: '70px',
    height: '25px',
    fontSize: '12px'
})}
`