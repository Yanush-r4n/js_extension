/*
Задание 4.
1. Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
2. Цвет у рамки сделать красным
*/

const button = document.querySelector("form button.btn");
const input = document.querySelector("form input[type='text']");

button.onclick = function (e) {
    if (!input.value) {
        const h2 = document.createElement("h2");
        h2.innerHTML = "Вы не заполнили поле ввода";
        input.parentElement.appendChild(h2);
        input.style.border = "solid red";
    }
};