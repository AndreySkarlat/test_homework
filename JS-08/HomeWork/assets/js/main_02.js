/*2) Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне 
должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. 
При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.*/

let btnDiv = document.createElement('div');
btnDiv.setAttribute('style', 'text-align:center');
document.body.appendChild(btnDiv);

let btnOpen = document.createElement("button");
btnOpen.innerText = "Open";
btnOpen.setAttribute('onclick', 'openModal()');
btnOpen.setAttribute('style', 'margin: 20px auto');
btnDiv.appendChild(btnOpen);

let modal = document.createElement('div');
modal.setAttribute('style', 'margin:0 auto; background-color:rgba(0, 0, 0, .1); text-align:center');
modal.style.display = 'none';
modal.style.width = '500px';
modal.style.height = '500px';
modal.style.border = '2px solid #000';
document.body.appendChild(modal);

let p = document.createElement('p');
p.innerText = 'Click the button!';
p.style.fontSize = '24px';
modal.appendChild(p);

btnClose = document.createElement("button");
btnClose.innerText = "Close";
btnClose.setAttribute('onclick', 'closeModal()');
modal.appendChild(btnClose);


function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}