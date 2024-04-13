"use strict";

/*
С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
*/

const list = document.querySelector('ul');
const listElements = list.querySelectorAll('li');

for (let li = 1; li < listElements.length; li += 2) {
    listElements[li].style.backgroundColor = 'aqua';
}