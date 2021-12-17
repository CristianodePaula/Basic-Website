import { keyframes } from 'styled-components'

export const navbarAnimation = {
  hidden: { y: -100, opacity: 0 }, 
  show: { y: 1, opacity: 1, transition:{type: 'spring', stiffness: 2000, duration: 3}}
}

export const heroSliderAnimation = {
  hidden: { y: '30vh', opacity: 0, scale: 0 },
  show: { y: 1, opacity: 1, scale: 1, transition:{type: 'tween', duration: 1, delay: 0.1 }}
}

export const textAnimation = {
  hidden: { x: -100, opacity: 0 },
  show: { x: -1, opacity: 1, transition:{  duration: 1, delay: 0.2 }}
}

export const imageAnimation = {
  hidden: { scale: 1.3, opacity: 0 },
  show: { scale: 1, opacity: 1, transition:{  duration: 1, delay: 0.2 }}
}

export const sliderAnimation = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: 'tween', duration: 1, delay: 0.5 }}
}

export const txtSlideAnimation = {
  hidden: { x: 50, opacity: 0 }, 
  show: { x: 0, opacity: 1, transition:{ duration: 3, delay: 0.5 }}
}

export const cardsAnimation = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'tween', duration: 1, delay: 0.5 }}}

export const contactAnimation = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: 'spring',  stiffness: 500, duration: 1 }}}

export const opacityAnimation = keyframes`
    0%, 100% { opacity: 1 }
    50% { opacity: 0 }
`
export const footerTAnimation = {
  hidden: { y: -20, opacity: 0 }, 
  show: { y: 1, opacity: 1, transition:{ duration: 1}}
}
export const footerBAnimation = {
  hidden: { y: 20, opacity: 0 }, 
  show: { y: 1, opacity: 1, transition:{ duration: 1, }}
}