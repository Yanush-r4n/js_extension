/*
Дан тег <div class="content"></div> 
Создайте новый элемент p
Добавьте в него текст “Новый текстовый элемент”
Добавьте созданный элемент внутри <div class="content"></div>
Удалите добавленный узел 
*/

const contentDiv = document.querySelector("div.content");
const newP = document.createElement("p");
newP.textContent = "Новый текстовый элемент";
contentDiv.appendChild(newP);
console.log(contentDiv);

// contentDiv.parentNode.removeChild(newP);
// newP.remove();