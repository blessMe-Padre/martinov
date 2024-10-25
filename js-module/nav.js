export const initNav = () => {

    const body = document.querySelector('body');
    const headerPopupMenu = document.querySelector('.header__popup-menu');

    // каталог
    const menuBtn = document.querySelector('.menu-button');
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('is-active');
        headerPopupMenu.classList.toggle('is-active');
    });

    // мини корзина
    const cartBtn = document.querySelector('.header__cart-button');
    const miniCardPopup = document.querySelector('.header__minicart-popup');

    cartBtn.addEventListener('click', (event) => {
        miniCardPopup.classList.toggle('is-active');
        if (miniCardPopup.classList.contains('is-active')) {
            document.body.addEventListener('click', closeMiniCartOnClickOutside);
        } else {
            document.body.removeEventListener('click', closeMiniCartOnClickOutside);
        }
    });

    function closeMiniCartOnClickOutside(event) {
        if (!miniCardPopup.contains(event.target) && !cartBtn.contains(event.target)) {
            miniCardPopup.classList.remove('is-active');
            document.body.removeEventListener('click', closeMiniCartOnClickOutside);
        }
    }



}