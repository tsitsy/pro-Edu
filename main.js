import './style.scss'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

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
const swiper1 = new Swiper('.mySwiper1', {
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
  const swiper2 = new Swiper('.mySwiper2', {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    effect: "fade",
    breakpoints:{
        1536:{
            slidesPerView: 2,
             spaceBetween: 20,
           
        }
    },
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
  });
  const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});
