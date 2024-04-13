"use strict";

/*
Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: 
"Вы навели на textarea."
*/

const textArea = document.querySelector("textarea");
textArea.addEventListener('mouseenter', () => {
    console.log("Вы навели на textarea.");
});