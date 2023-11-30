import './style.scss'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import '@splidejs/splide/css';
import { Splide } from '@splidejs/splide'

var splide = new Splide('.splide', {
  // type: 'loop',
  perPage: 2,
  breakpoints: {
    1536: {
      perPage: 1,

    },
  focus: 'left',
  }
});
splide.mount();

var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');
var blue = document.getElementById("blue");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  blue.classList.toggle('slide');
});
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
  // const swiper2 = new Swiper('.mySwiper2', {
  //   modules: [Navigation, Pagination],
  //   spaceBetween: 30,
  //   effect: "fade",
  //   breakpoints:{
  //       1536:{
  //           slidesPerView: 2,
  //            spaceBetween: 10,
           
  //       }
  //   },
    
  //   navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     }
  // });
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
