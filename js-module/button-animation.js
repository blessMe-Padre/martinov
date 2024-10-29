export const initButtonAnimation = () => {
    const buttons = document.querySelectorAll('._anim-button');
    buttons.forEach((button) => {
        const text = button.textContent.trim();
        button.innerHTML = '';
        let indexWithoutSpaces = 0;

        text.split('').forEach(char => {
            const span = document.createElement('span');

            if (char === ' ') {
                // span.classList.add('space');
                span.innerHTML = '&nbsp;';
            } else {
                span.textContent = char;

                if (indexWithoutSpaces % 2 === 0) {
                    span.classList.add('even');
                } else {
                    span.classList.add('odd');
                }
                indexWithoutSpaces++;
            }
            button.appendChild(span);
        });

        button.addEventListener('mouseover', () => {
            button.querySelectorAll('span').forEach((span, index) => {
                if (!span.classList.contains('space')) { // Пропускаем пробелы
                    span.classList.add('animate');
                    // span.style.animationDelay = `${index * 50}ms`;
                }
            });
        });
        button.addEventListener('mouseleave', () => {
            button.querySelectorAll('span').forEach(span => {
                span.classList.remove('animate');
                span.style.animationDelay = '';
            });
        });
    });

}