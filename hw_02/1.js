"use strict";

/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
*/

const dropdownItem = document.querySelectorAll(".dropdown-item");

dropdownItem.forEach(function (dropdownItem) {
    dropdownItem.classList.add("super-dropdown");
});