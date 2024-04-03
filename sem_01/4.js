/*
Создать элемент button, добавить в блок <div class="content"></div>
При клике на который в консоль выводится сколько раз пользователь нажал на 
данную кнопку
*/

const button = document.createElement("button");
const contentDIV = document.querySelector("div.content");
button.innerHTML = "Click me!";
contentDIV.appendChild(button);

let count = 0;
button.onclick = function (e) {
    count++;
    console.log(count);
};