/*
Задание 2.
Необходимо с помощью querySelector найти параграф с классом text
1. Вывести в консоль соседний элемент h2
2. Вывести в консоль родительский элемент content
3. Вывести в консоль картинку
4. Вывести в консоль родительский элемент elem
*/

const pText = document.querySelector("div.elem div.content p.text");
console.log(pText.innerHTML);
console.log(pText.previousElementSibling);
console.log(pText.parentElement);
console.log(pText.parentElement.previousElementSibling);
console.log(pText.parentElement.parentElement);