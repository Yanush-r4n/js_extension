/*
<div id="block">
	<p>1</p>
	<p>2</p>
</div>
1. Получите ссылку на первый абзац из дива с id, равным block, выведите его в 
консоль
2. Получите ссылку на первый абзац с классом www. и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p>
*/

const firstParagraf = document.querySelector("div#block p");
console.log(firstParagraf);

const wwwPg = document.querySelector("p.www");
console.log(wwwPg);