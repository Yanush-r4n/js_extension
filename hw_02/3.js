"use strict";

/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
*/

const menus = document.querySelectorAll(".menu.dropdown-menu");

menus.forEach(function(menu) {
    menu.classList.remove("dropdown-menu");
});