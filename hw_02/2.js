"use strict";

/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
*/

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    if (btn.classList.contains("btn-secondary")) {
        btn.classList.remove("btn-secondary");
        console.log("Удалено:", btn);
    } else {
        btn.classList.add("btn-secondary");
        console.log("Добавлено", btn);
    }
});