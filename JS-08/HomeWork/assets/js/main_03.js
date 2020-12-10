/*3) Создать HTML-страницу со светофором и кнопкой,
которая переключает светофор на следующий цвет.*/

let green = document.createElement('div');
green.setAttribute('style', 'margin:0 auto; background-color:#4caf50; border-radius:50%');
green.style.width = '50px';
green.style.height = '50px';
green.style.border = '2px solid #000';
green.style.opacity = 1;
document.body.appendChild(green);

let yellow = document.createElement('div');
yellow.setAttribute('style', 'margin:0 auto; background-color:#ffeb3b; border-radius:50%');
yellow.style.width = '50px';
yellow.style.height = '50px';
yellow.style.border = '2px solid #000';
yellow.style.opacity = 0.5;
document.body.appendChild(yellow);

let red = document.createElement('div');
red.setAttribute('style', 'margin:0 auto; background-color:#f44336; border-radius:50%');
red.style.width = '50px';
red.style.height = '50px';
red.style.border = '2px solid #000';
red.style.opacity = 0.5;
document.body.appendChild(red);

let btnDiv = document.createElement('div');
btnDiv.setAttribute('style', 'text-align:center');
document.body.appendChild(btnDiv);

btnClick = document.createElement("button");
btnClick.innerText = "Click";
btnClick.setAttribute('onclick', 'clickBtn()');
btnClick.setAttribute('style', 'margin: 20px auto');
btnDiv.appendChild(btnClick);

function clickBtn() {
    if (green.style.opacity == 1) {
        green.style.opacity = 0.5;
        yellow.style.opacity = 1;
        red.style.opacity = 0.5;
    } else if (yellow.style.opacity == 1) {
        green.style.opacity = 0.5;
        yellow.style.opacity = 0.5;
        red.style.opacity = 1;
    } else {
        green.style.opacity = 1;
        yellow.style.opacity = 0.5;
        red.style.opacity = 0.5;
    }
}