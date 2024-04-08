/*
Задание 3.
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей
*/

const h2 = document.querySelector("div.item div.elem div.info h2.subtitle");

let currElement = h2;
while (currElement.parentElement.nodeName !== "BODY") {
    console.log(currElement.parentElement);
    currElement = currElement.parentElement;
}