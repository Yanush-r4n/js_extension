"use strict";

/*
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
*/

const ariaLabelledby = document.querySelector("[aria-labelledby='dropdownMenuButton']");

if (ariaLabelledby) {
    ariaLabelledby.dataset.dd = "3";
}