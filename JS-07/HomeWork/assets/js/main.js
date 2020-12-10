/*1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

    - поле, хранящее радиус окружности;
    - get-свойство, возвращающее радиус окружности;
    - set-свойство, устанавливающее радиус окружности;
    - get-свойство, возвращающее диаметр окружности;
    - метод, вычисляющий площадь окружности;
    - метод, вычисляющий длину окружности.

Продемонстрировать работу свойств и методов.*/

class Ring {
    constructor(r) {
        this.r = r;
    }
    get radius() {
        return this.r;
    }
    set radius(r) {
        this.r = r;
    }
    get d() {
        return this.r * 2;
    }
    P() {
        return Math.PI * (this.r * this.r);
    }
    S() {
        return 2 * Math.PI * this.r;
    }
}

function task01() {
    let r = document.getElementById("number").value,
        ring = new Ring(r);
    document.getElementById("res_01").innerHTML = `r = ${ring.radius}, d = ${ring.d}, P = ${ring.P().toFixed(2)}, S = ${ring.S().toFixed(2)}`;
};


/*2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

    - поле, которое хранит цвет маркера;
    - поле, которое хранит количество чернил в маркере (в процентах);
    - метод для печати (метод принимает строку и выводит текст соответствующим цветом;
      текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ –
      это 0,5% чернил в маркере).

Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив 
метод для заправки маркера.*/


class Marker {
    constructor(color, perc) {
        this.color = color;
        this.perc = parseInt(perc);
    }
    get markerPerc() {
        return this.perc;
    }

    set markerPerc(newPerc) {
        this.perc = newPerc;
    }

    print(text) {
        let html = `<p style="color:${this.color}">`;
        for (let i = 0; i < text.length; i++) {
            if (this.perc != 0) {
                if (text[i] == " ") {
                    this.perc += 0.5;
                }
                html += `${text[i]}`;
                this.perc -= 0.5;
            } else {
                alert("Marker is over!");
                break;
            }
        }
        html += `</p>`
        return html;
    }
}

class FilledMarker extends Marker {
    fill(perc) {
        this.perc = parseInt(this.perc) + parseInt(perc);
        if (this.perc > 100) {
            this.perc = 100;
        }
        return this.perc;
    }
}

let marker = new FilledMarker('#28a745', 10);

function task02_1() {
    let text = document.getElementById("text").value;
    document.getElementById("res_02").innerHTML = marker.print(text);
};

function task02_2() {
    let perc = document.getElementById("percent").value;
    marker.perc = marker.fill(perc);
};


/*3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. 
Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

Создать объект класса EmpTable и вывести на экран результат работы метода getHtml(). */



class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

let arrEmployee = [{
        "name": "George Clooney",
        "position": "Team Lead",
        "salary": 1000
    },
    {
        "name": "Brad Pitt",
        "position": "1st Friend",
        "salary": 900
    },
    {
        "name": "Matt Damon",
        "position": "2nd Friend",
        "salary": 800
    },
    {
        "name": "Bernie Mac",
        "position": "3rd Friend",
        "salary": 700
    },
    {
        "name": "Elliott Gould",
        "position": "4th Friend",
        "salary": 600
    },
    {
        "name": "Casey Affleck",
        "position": "5th Friend",
        "salary": 500
    },
    {
        "name": "Scott Caan",
        "position": "6th Friend",
        "salary": 500
    },
    {
        "name": "Eddie Jemison",
        "position": "7th Friend",
        "salary": 500
    },
    {
        "name": "Don Cheadle",
        "position": "8th Friend",
        "salary": 500
    },
    {
        "name": "Shaobo Qin",
        "position": "9th Friend",
        "salary": 500
    },
    {
        "name": "Carl Reiner",
        "position": "10th Friend",
        "salary": 500
    },
    {
        "name": "Julia Roberts",
        "position": "Bookkeeper",
        "salary": 1000
    }
];

class EmpTable {
    constructor(arr) {
        this.arr = arr;
    }
    getHtml() {
        let tr;
        let html = `<table class="table table-striped">
                        <h2 style="text-transform:uppercase"> Bank employees </h2>
                            <tr> 
                                <th scope="col"> Name </th>
                                <th scope="col"> Position </th>
                                <th scope="col"> Salary </th>
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
        return html;
    }
}

let tableObj = new EmpTable(arrEmployee);

function task03() {
    document.getElementById("res_03").innerHTML = tableObj.getHtml();
};