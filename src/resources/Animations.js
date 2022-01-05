import { keyframes } from 'styled-components'

/* Navbar  */

export const navbarAnimation = {
  hidden: { y: -100, opacity: 0 }, 
  show: { y: 1, opacity: 1, transition:{type: 'spring', stiffness: 2000, duration: 2, delay: 0.2}}
}

/* Hero */

export const heroAnimation = {
  hidden: { y: '30vh', opacity: 0, scale: 0 },
  show: { y: 1, opacity: 1, scale: 1, transition:{type: 'tween', duration: 1, delay: 0.2 }}
}
export const heroTAnimation  = {
  hidden: { y: '10vh', opacity: 0, scale: 0 },
  show: { y: 1, opacity: 0.3, scale: 1, transition:{ duration: 2, delay: 0.5}}
}
export const textScroll = keyframes`
  25% { transform: translateY(-50px) }
  50% { transform: translateY(-100px) }
  75% { transform: translateY(-150px) }
  100% { transform: translateY(-200px) }
`

/* About */

export const aboutTAnimation = {
  hidden: { x: -100, opacity: 0 },
  show: { x: -1, opacity: 1, transition:{  duration: 1, delay: 0.2 }}
}
export const aboutIAnimation = {
  hidden: { scale: 1.3, opacity: 0 },
  show: { scale: 1, opacity: 1, transition:{  duration: 2, delay: 0.2 }}
}

/* Slider */

export const sliderAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: {  duration: 2, delay: 0.2 }}
}
export const sliderTAnimation = {
  hidden: { x: 50, opacity: 0 }, 
  show: { x: 0, opacity: 1, transition:{ duration: 2, delay: 0.2 }}
}

/* Adverts */

export const advertsGAnimation  = {
  hidden: {},
  show: {transition: { delay: 1, when: 'beforeChildren', staggerChildren: 0.4 }}
}
export const advertsCAnimation = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 2 }}
}
export const advertsIAnimation = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1 }}
}

/* Contact */

export const contactAnimation = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: {duration: 2, delay: 1, type: 'spring',  stiffness: 500 }}}

/* Footer */

export const footerTAnimation = {
  hidden: { y: -20, opacity: 0 }, 
  show: { y: 1, opacity: 1, transition:{ duration: 2, delay: 1}}
}
export const footerBAnimation = {
  hidden: { y: 20, opacity: 0 }, 
  show: { y: 1, opacity: 1, transition:{ duration: 2, delay: 1 }}
}
export const opacityAnimation = keyframes`
    0%, 100% { opacity: 1 }
    50% { opacity: 0 }
`