/*
Дан тег <div class="content"></div> 
Создайте с помощью javascript новый элемент button
Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
*/

const button = document.createElement("button");
const contentDIV = document.querySelector("div.content");
button.innerHTML = "Отправить";
contentDIV.appendChild(button);

button.onclick = function (e) {
    button.innerHTML = "Текст отправлен";
};