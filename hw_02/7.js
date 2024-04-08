"use strict";

/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/

const dropdownToggle = document.querySelector(".dropdown-toggle");

if (dropdownToggle && dropdownToggle.hasAttribute("type")) {
    dropdownToggle.removeAttribute("type");
}