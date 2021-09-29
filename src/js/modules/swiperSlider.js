import Swiper, { Pagination ,Autoplay, EffectFade, Navigation} from 'swiper';

Swiper.use([Pagination, Autoplay, EffectFade, Navigation]);


export default function() {
    const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
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
        }
    });
}