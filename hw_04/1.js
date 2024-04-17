"use strict";

/*
При изменении значения в input с id="from", значение содержащееся в нем должно 
моментально отображаться в span. То есть при печати в input'е тег span также 
должен меняться.
*/

const input = document.querySelector('input#from');
const span = document.querySelector('span');

input.addEventListener('input', (e) => {
    span.innerHTML = e.target.value;
});