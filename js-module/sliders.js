export const initSlider = () => {
    // слайдер "Отзывы"
    const feedback = document.querySelector('.hero-swiper');
    if (feedback) {
        const feedback = new Swiper('.hero-swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,

            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },

            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
        });
    }

    // слайдер "Новинки"
    const categorySlider = document.querySelector('.category-section-swiper');
    if (categorySlider) {
        const categorySlider = new Swiper('.category-section-swiper', {
            loop: true,
            spaceBetween: 20,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                340: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1023: {
                    slidesPerView: 4,
                },
            },

            navigation: {
                nextEl: '.swiper-button-next-new',
                prevEl: '.swiper-button-prev-new',
            },
        });
    }

    // слайдер "Популярное"
    const popularSlider = document.querySelector('.popular-section-swiper');
    if (popularSlider) {
        const categorySlider = new Swiper('.popular-section-swiper', {
            loop: true,
            spaceBetween: 20,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                340: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1023: {
                    slidesPerView: 4,
                },
            },

            navigation: {
                nextEl: '.swiper-button-next-popular',
                prevEl: '.swiper-button-prev-popular',
            },
        });
    }
    // слайдер "Бренды"
    const brandsSlider = document.querySelector('.brands-section-swiper');
    if (brandsSlider) {
        const brandsSlider = new Swiper('.brands-section-swiper', {
            loop: true,
            // spaceBetween: 20,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                340: {
                    slidesPerView: 2,
                },
                450: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 5,
                },
                1023: {
                    slidesPerView: 6,
                },
            },

            navigation: {
                nextEl: '.swiper-button-next-brands',
                prevEl: '.swiper-button-prev-brands',
            },
        });
    }
}
