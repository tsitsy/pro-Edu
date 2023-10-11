import './style.scss'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';;

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
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });