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

    // слайдер "Категории"
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
}
