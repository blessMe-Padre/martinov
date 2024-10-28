export const initSlider = () => {
    // слайдер "Отзывы"
    const feedback = document.querySelector('.hero-swiper');
    if (feedback) {
        const feedback = new Swiper('.hero-swiper', {
            loop: true,
            spaceBetween: 30,
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
}
