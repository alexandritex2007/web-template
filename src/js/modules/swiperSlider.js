import Swiper, { Pagination ,Autoplay, EffectFade, Navigation} from 'swiper';

Swiper.use([Pagination, Autoplay, EffectFade, Navigation]);


export default function() {
    const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 3000
    });
}