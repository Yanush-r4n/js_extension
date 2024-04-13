"use strict";

/*
При клике на какой-либо тег на странице в консоль должно выводиться сообщение 
наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование.
*/

const clickFunc = (e) => {
    if (e.target.className === "super_element") {
        console.log(`Класс "${e.target.className}" присутствует в элементе "${e.target.tagName.toLowerCase()}"`);
    } else {
        console.log(`В элементе нет класса "super_element". Вы клинкули по тегу ${e.target.tagName.toLowerCase()}`);
    }
};

document.addEventListener("click", clickFunc);

// А как здесь использовать делигирование? И вообще, правильно ли я поняла задание?