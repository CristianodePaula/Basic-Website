import { keyframes } from 'styled-components'

export const navbarAnimation = {
  hidden: { y: -100, opacity: 0 },
  show: { y: 1, opacity: 1, transition: { type: 'spring', stiffness: 2000, duration: 2, delay: 0.2 } }
}


export const headerAnimation = {
  hidden: { y: '-30vh', opacity: 0, scale: 0 },
  show: { y: 1, opacity: 1, scale: 1, transition: { type: 'tween', duration: 3, delay: 0.5 } }
}
export const headerTAnimation = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 0.7, scale: 1, transition: { duration: 3, delay: 1.5 } }
}
export const textScroll = keyframes`
  25% { transform: translateY(-50px) }
  50% { transform: translateY(-100px) }
  75% { transform: translateY(-150px) }
  100% { transform: translateY(-200px) }
`


export const aboutTAnimation = {
  hidden: { x: -100, opacity: 0 },
  show: { x: -1, opacity: 1, transition: { duration: 1, delay: 0.2 } }
}
export const aboutIAnimation = {
  hidden: { scale: 1.3, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 2, delay: 0.2 } }
}


export const sliderAnimation = {
  hidden: { x: 50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 2, delay: 0.2 } }
}

export const sliderYAnimation = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 2, delay: 0.2 } }
}


export const cardsGAnimation = {
  hidden: {},
  show: { transition: { delay: 1, when: 'beforeChildren', staggerChildren: 0.4 } }
}
export const cardsCAnimation = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 2 } }
}
export const cardsIAnimation = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1 } }
}


export const contactAnimation = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 3, delay: 0.5, type: 'spring', stiffness: 1000 } }
}


export const footerTAnimation = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 1, opacity: 1, transition: { duration: 1, delay: 0.5 } }
}
export const footerBAnimation = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 1, opacity: 1, transition: { duration: 1, delay: 0.5 } }
}
export const opacityAnimation = keyframes`
    0%, 100% { opacity: 1 }
    50% { opacity: 0 }
`