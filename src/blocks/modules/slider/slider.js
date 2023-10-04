
import Swiper, { Navigation, Pagination, EffectFade, Grid, Thumbs  } from 'swiper';

Swiper.use([Navigation, Pagination, EffectFade, Grid, Thumbs ]);


const jsWinnersSlider = new Swiper(".jsWinnersSlider", {
	grid: {
		rows: 2,
		columns: 2,
	},
	spaceBetween: 8,
	navigation: {
		nextEl: ".jsWinnersSliderNavigation .swiper-button-next",
		prevEl: ".jsWinnersSliderNavigation .swiper-button-prev",
	},
	slidesPerView: "auto",
	breakpoints: {
		768:{
			spaceBetween: 24,
		},
		1024:{
			slidesPerView: 2,
			spaceBetween: 24,
		}
	}
});

const jsIntroMainSliderThumb = new Swiper(".jsIntroMainSliderThumb", {
	spaceBetween: 16,
    slidesPerView: "auto",
    freeMode: false,
    watchSlidesProgress: true,
    breakpoints: {
		480: {
			spaceBetween: 24,
		},
		1024: {
			slidesPerView: 3,
			
		},
	}
});

const jsIntroMainSlider = new Swiper(".jsIntroMainSlider", {
	slidesPerView: 1,
    speed: 600,
	effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
	autoHeight: true,
    thumbs: {
        swiper: jsIntroMainSliderThumb,
    },
});

const modalPromoSlider = new Swiper('.jsModalPromoSlider', {
	speed: 500,
    parallax: true,
	slidesPerView: 1,
	spaceBetween: 24,
    pagination: {
		el: ".swiper-pagination",
        type: "fraction",
	},
	navigation: {
		nextEl: ".jsModalPromoSlider .slider__button--next",
		prevEl: ".jsModalPromoSlider .slider__button--prev",
	},
});