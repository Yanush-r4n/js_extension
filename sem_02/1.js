/* 
Задание 1.
1. Дан блок, внутри него необходимо создать элемент div с классом item, 
разместить текст “Элемент внутри” и задать стили
- Цвет текста синий
- Рамка сплошная черная
- Цвет фона #f8f8f8
- Внутренний отступ 16px
2. Добавить данному блоку класс item_1 (использовать setAttribute)
*/

const divItem = document.createElement("div");
divItem.classList.add("item");
const divBlock = document.querySelector("div.block");
divBlock.appendChild(divItem);
divItem.textContent = "Элемент внутри";
divItem.setAttribute("class", divItem.getAttribute("class") + " item_1");
