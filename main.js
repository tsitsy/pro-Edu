import './style.scss'
import Swiper from 'swiper';
import 'swiper/css';

const humberger = document.querySelector('.humb')
const navMobile = document.querySelector('.nav-mobile')
const exitIcon = document.querySelector('.exit')

humberger.addEventListener('click', () => {

    navMobile.classList.toggle('active')
})

window.addEventListener('resize', (e) => {
    if(e.target.innerWidth > 1600) {
        navMobile.classList.remove('active')
    }
})
exitIcon.addEventListener('click', () =>{
    navMobile.classList.remove('active')

})