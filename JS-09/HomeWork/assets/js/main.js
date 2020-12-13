/*1) Создать HTML-страницу для отображения/редактирования текста. При открытии страницы 
текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется 
textarea с тем же текстом, который теперь можно редактировать. При нажатии
Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить 
поведение по умолчанию для этих сочетаний клавиш.*/

document.body.addEventListener("keydown", (e) => {
    let tag = document.getElementById("text-tag");
    if (e.code === "KeyE" && (e.ctrlKey || e.metaKey) && tag.nodeName === "DIV") {
        let newTag = document.createElement("textarea");
        newTag.id = "text-tag";
        newTag.textContent = tag.textContent;
        tag.replaceWith(newTag);
    } else if (e.code === "Comma" && (e.ctrlKey || e.metaKey) && tag.nodeName === "TEXTAREA") {
        let newTag = document.createElement("div");
        newTag.id = "text-tag";
        newTag.textContent = tag.value;
        tag.replaceWith(newTag);
    }
});

/*2) Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо 
отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться 
как числа, а не как строки.*/

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}
let arrEmployee = [
    { "name": "George Clooney", "position": "Team Lead", "salary": 1000 },
    { "name": "Brad Pitt", "position": "1st Friend", "salary": 900 },
    { "name": "Matt Damon", "position": "2nd Friend", "salary": 800 },
    { "name": "Bernie Mac", "position": "3rd Friend", "salary": 3000 },
    { "name": "Elliott Gould", "position": "4th Friend", "salary": 600 },
    { "name": "Casey Affleck", "position": "5th Friend", "salary": 450 },
    { "name": "Scott Caan", "position": "6th Friend", "salary": 500 },
    { "name": "Eddie Jemison", "position": "7th Friend", "salary": 500 },
    { "name": "Don Cheadle", "position": "8th Friend", "salary": 5000 },
    { "name": "Shaobo Qin", "position": "9th Friend", "salary": 500 },
    { "name": "Carl Reiner", "position": "10th Friend", "salary": 500 },
    { "name": "Julia Roberts", "position": "Bookkeeper", "salary": 1000 }
];
class EmpTable {
    constructor(arr) {
        this.arr = arr;
    }
    getHtml() {
        let tr;
        let html = `<table id="table" class="table table-striped">
                        <h2 style="text-transform:uppercase"> Bank employees </h2>
                            <tr> 
                                <th id="name" scope="col" style="cursor:pointer"> Name </th>
                                <th id="position" scope="col" style="cursor:pointer"> Position </th>
                                <th id="salary" scope="col" style="cursor:pointer"> Salary </th>
                            </tr>
        `;
        for (let i = 0; i < arrEmployee.length; i++) {
            tr = arrEmployee[i];
            html += `
            <tr>
                <td>${tr.name}</td>
                <td>${tr.position}</td>
                <td>${tr.salary}</td>
            </tr>
            `;
        }
        html += `</table>`;
        document.getElementById("res_02").innerHTML = html;
    }
}

let tableObj = new EmpTable(arrEmployee);
tableObj.getHtml();

document.body.addEventListener('click', (e) => {
    if (e.target.id == "name") {
        //console.log('CALL: name');
        arrEmployee.sort(function(a, b) {
            let nameA = a.name.toLowerCase(),
                nameB = b.name.toLowerCase();
            if (nameA > nameB) {
                return 1;
            } else if (nameA < nameB) {
                return -1;
            } else {
                return 0;
            }
        });
        tableObj.getHtml();
    }
    if (e.target.id == "position") {
        //console.log('CALL: position');
        arrEmployee.sort(function(a, b) {
            let posA = a.position.toLowerCase(),
                posB = b.position.toLowerCase();
            if (posA > posB) {
                return 1;
            } else if (posA < posB) {
                return -1;
            } else {
                return 0;
            }
        });
        tableObj.getHtml();
    }
    if (e.target.id == "salary") {
        //console.log('CALL: salary');
        arrEmployee.sort(function(a, b) {
            if (a.salary > b.salary) {
                return 1;
            } else if (a.salary < b.salary) {
                return -1;
            } else {
                return 0;
            }
        });
        tableObj.getHtml();
    }
});

/*3) Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять 
размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.*/

document.body.addEventListener('mousedown', (e) => {
    inMove = 1;
    if (e.target.id == "resize") {
        let el = document.getElementById("text-resp");
        el.startX = (e.clientX - el.offsetWidth);
        el.startY = (e.clientY - el.offsetHeight);
        return el.startX, el.startY;
    }
});

let inMove = 1;
document.body.addEventListener('mousemove', (e) => {
    if (e.target.id == "resize" && inMove == 1) {
        let el = document.getElementById("text-resp");
        el.style.width = e.clientX - el.startX + 'px';
        el.style.height = e.clientY - el.startY + 'px';
    }
});

document.body.addEventListener('mouseup', (e) => {
    if (e.target.id == "resize" && inMove == 1) {
        let el = document.getElementById("text-resp");
        el.style.width = e.clientX - el.startX + 'px';
        el.style.height = e.clientY - el.startY + 'px';
    }
    inMove = 0;
});