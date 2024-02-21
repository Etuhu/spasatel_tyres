//Слайдеры
new Swiper(".promo-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    simulateTouch: true,
    // autoplay: {
    //     delay: 5000,
    // },
    spaceBetween: 0,
    watchOverflow: true,
    pagination: {
      el: '.promo-swiper-pagination',
      clickable: 'true',
    },
    navigation: {
        nextEl: ".promo-swiper-button-next",
        prevEl: ".promo-swiper-button-prev",
    },
});

//Параметры для типового слайдера с карточками товаров
let productSliderParams = {
	slidesPerView: 5.5,
	slidesPerGroup: 1,
	speed: 500,
	grabCursor: true,
	simulateTouch: true,
	spaceBetween: 20,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	freeMode: {
		enabled: true,
		sticky: true,
	},
	navigation: {},
	pagination: {},
	breakpoints: {
		320: {
          slidesPerView: 1.5,
		  slidesPerGroup: 1,
		  spaceBetween: 10
		},
		400: {
          slidesPerView: 1.8,
		  spaceBetween: 10
		},
		576: {
		  slidesPerView: 2,
		  spaceBetween: 10
		},
		768: {
		  slidesPerView: 2,
		  spaceBetween: 15
		},
		992: {
          slidesPerView: 3,
		  slidesPerGroup: 1,
		  spaceBetween: 20
		},
		1600: {
		  slidesPerView: 4,
		  slidesPerGroup: 1,
		  spaceBetween: 30,
		}
	}
};

//Заменяем параметры навигационных кнопок для слайдера с акционными товарами на главной и инициализируем слайдер
productSliderParams.navigation.nextEl = '.top-product-swiper-button-next';
productSliderParams.navigation.prevEl = '.top-product-swiper-button-prev';
new Swiper(".top-product-swiper", productSliderParams);

//Заменяем параметры навигационных кнопок для слайдера с новыми товарами на главной и инициализируем слайдер
productSliderParams.navigation.nextEl = '.sales-swiper-button-next';
productSliderParams.navigation.prevEl = '.sales-swiper-button-prev';
new Swiper(".sales-swiper", productSliderParams);

new Swiper(".partners-swiper", {
    slidesPerView: 6,
    slidesPerGroup: 2,
    speed: 500,
    simulateTouch: true,
    // autoplay: {
    //     delay: 5000,
    // },
    spaceBetween: 194,
    watchOverflow: true,
});

//Кнопка прокрутки наверх
var scrollButton = document.getElementById("top-button");
function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords / 2) {
        scrollButton.classList.add("show");
    }
    if (scrolled < coords / 2) {
        scrollButton.classList.remove("show");
    }
}
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

// window.addEventListener("scroll", trackScroll);
// scrollButton.addEventListener("click", backToTop);


//Подключение кастомного скролла при ширине экрана больше 991 пикселя
if ($(window).width() > 991) {
    (function ($) {
        $(window).on("load", function () {
            $(".text-content-scroll").mCustomScrollbar({
                theme: 'dark',
                scrollInertia: "300",
                advanced: {
                    updateOnContentResize: "true",
                },
            });
        });
    })(jQuery);
};

//Подключение маски в поле телефона
$(document).ready(function () {
	$(".phone-input").inputmask("+7 (999) 999 9999");
});