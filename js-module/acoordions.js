export const initAccordions = () => {
    //accordions
    if (innerWidth <= 560) {

        const accordions = document.querySelectorAll(".header__catalog-menu>li");
        console.log(accordions);

        accordions.forEach(el => {
            const button = el.querySelector('.header__catalog-menu>li>a');
            const content = el.querySelector('.submenu');

            button.addEventListener('click', (evt) => {
                evt.preventDefault();
                const currentButton = evt.currentTarget;

                currentButton.classList.toggle('_active');
                content.classList.toggle('_active');

                if (currentButton.classList.contains('_active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = null;
                }

            });
        });
    }
}