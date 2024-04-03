/*
Дан тег <a class="link" href="#">link text html</a>
Вам необходимо поменять текст внутри ссылки на “link text js”
Заменить href, на значение https://developer.mozilla.org/ru/ 
Дан тег <img class="photo" src="" alt=""> 
Вам необходимо с помощью js поменять значение src на любое изображение из 
интернета
*/

const link = document.querySelector("a");
link.textContent = "link text js";
link.href = "https://developer.mozilla.org/ru/";

const photo = document.querySelector("img");
photo.src = "Photo.jpg";