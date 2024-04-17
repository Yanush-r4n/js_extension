"use strict";

/*
При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.
*/

const buttonMessage = document.querySelector('button.messageBtn');
const divMessage = document.querySelector('div.message');


buttonMessage.addEventListener('click', () => {
    divMessage.classList.add('animate_animated', 'animate_fadeInLeftBig');
    divMessage.style.visibility = 'visible';
});