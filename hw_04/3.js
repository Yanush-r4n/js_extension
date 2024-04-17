"use strict";

/*
Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. 
Если какое-либо поле не заполнено, форма не должна отправляться, также должны 
быть подсвечены незаполненные поля (необходимо поставить класс error 
незаполненным полям). Как только пользователь начинает заполнять какое-либо 
поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error 
данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/

const form = document.querySelector('form');
const input = form.querySelector('input.form-control');
const select = form.querySelector('select.form-control');
const button = form.querySelector('button');

form.addEventListener('submit', (e) => {
    if (!input.value.trim() || !select.value) {
        e.preventDefault();
        input.classList.add('error');
        select.classList.add('error');
    }
});

const isEmpty = function (input) {
    if (!input.target.value.trim()) {
        input.target.classList.add('error');
    } else {
        input.target.classList.remove('error');
    }
}

input.addEventListener('input', isEmpty);
select.addEventListener('input', isEmpty);
