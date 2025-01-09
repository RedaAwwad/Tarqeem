// Import Base file
// import 'virtual:svg-icons-register';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/style.css';
import '@/assets/scss/main.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import * as bootstrap from 'bootstrap'
import { Modal } from 'bootstrap';
// import scrollIntoView from 'scroll-into-view';

$(function () {
    setTimeout(function () {
        $('#preloader').addClass('hidden');
        // $('body').removeClass('overflow-hidden');

        reveal();

        if(window.innerWidth < 768) {
            reveal('.card-controller');
        }
    }, 1000);

    // init bootstrap modals
    Array.from(document.querySelectorAll('.custom-modal')).forEach(modalNode => {
        new Modal(modalNode)
    })

    if($('#particles-js').length) {
        particlesJS.load('particles-js', 'vendor/particles/particles.json');
    }

    if($('#particles-loader').length) {
        particlesJS.load('particles-loader', 'vendor/particles/particles.json');
    }


    // navbar menu navigation
    $('#openMenu').on('click', function () {
        $('#navbarMenu').addClass('active');
        $('.navbar-menu__overlay').addClass('active');
    })

    $('#closeMenu, .navbar-menu__overlay').on('click', function () {
        $('#navbarMenu').removeClass('active');
        $('.navbar-menu__overlay').removeClass('active');
    })

    function reveal(elementClass = '.reveal') {
        const reveals = document.querySelectorAll(elementClass);

        for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 50;

        if (elementTop < window.innerHeight - elementVisible) {
            reveals[i].classList.add("slide-up");
        }
        }
    }

    function makeNavbarFixed () {
        if (window.scrollY < 100) {
            $('.navbar__inner').removeClass('navbar__inner--fixed');
            $('.navbar__inner .logo').attr('src', $('.navbar__inner .logo').attr('data-logo-src'));
            return;
        }

        if (window.scrollY < 100) {
            $('.navbar__inner').removeClass('navbar__inner--fixed');
            $('.navbar__inner .logo').attr('src', $('.navbar__inner .logo').attr('data-logo-src'));
        } else {
            $('.navbar__inner').addClass('navbar__inner--fixed');
            $('.navbar__inner .logo').attr('src', $('.navbar__inner .logo').attr('data-colored-logo-src'));
        }
    }

    window.addEventListener("scroll", function () {
        reveal();
        makeNavbarFixed();

        if(window.innerWidth < 768) {
            reveal('.card-controller');
        }
    });

    makeNavbarFixed();

  const cursorDot = document.getElementById('cursorDot')
  const cursorOutline = document.getElementById('cursorOutline')

  window.addEventListener('mousemove', function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`
    cursorDot.style.top = `${posY}px`

    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`,
    }, {duration: 500, fill: 'forwards'})
  })
});

