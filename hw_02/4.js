"use strict";

/*
4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
<a href="#">link</a>
*/

const divDropDown = document.querySelector("div.dropdown");
divDropDown.insertAdjacentHTML("afterend", '<a href="#">link</a>');