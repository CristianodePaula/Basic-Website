import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
    background: black;
    .model {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
        transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out; 
        visibility: hidden;
        opacity: 0;
        transform: scale(0);
        overflow: hidden;
        z-index: 999;
    }
    .model.open {
        top: 10px;
        visibility: visible;
        opacity: 1;
        transform: scale(1);
    }
    .model img {
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
        display: block;
        line-height: 0;
        box-sizing: border-box;
        padding: 20px 0 20px;
        margin: 0 auto;
   }
   .model.open svg {
        position: fixed;
        top: 10px;
        right: 10px;
        width: 2rem;
        height: 2rem;
        padding: 5px;
        color: white;
        cursor: pointer;
`
export const Gallery = styled.div`
    -webkit-column-count: 3;   
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
    column-width: 33%;
    padding: 0 12px;
    ${mobile({
    webkitColumnCount: 2,
    mozColumnCount: 2,
    columnCount: 2
})}
`
export const Image = styled.img`
    margin-top: 10px; 
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
    cursor: pointer;
    transition: transform .2s; 
    filter: opacity(0.7);
    &:hover{ 
        filter: opacity(1);
        transform: scale(1.05)
    }
`

/*
###### Square Gallery Style ######

const Container = styled.div`
    height: 90vh; 
`
const Gallery = styled.div`
    display: grid;
    grid-row-gap: 25px;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
`   
const Image = styled.img`
    width: 295px;
    height: 160px;
    border-radius: 20px;
    cursor: pointer;
    object-fit: cover;
    &:hover{ 
        filter: opacity(0.7)
    }
    ${mobile({ 
    width: '200px', 
    height: '120px' 
    })}
`
*/