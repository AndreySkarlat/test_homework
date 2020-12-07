/*1) Создать массив «Список покупок». Каждый элемент массива является объектом, 
который содержит название продукта, необходимое количество и куплен или нет. 
Написать несколько функций для работы с таким массивом.

Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, 
а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим 
в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/

let shoppingList = [{
        "name": "Woter",
        "qty": 3,
        "buy": "yes"
    },
    {
        "name": "Cheese",
        "qty": 1,
        "buy": "no"
    },
    {
        "name": "Milk",
        "qty": 2,
        "buy": "yes"
    },
];

function printCart() {
    let html = `<ol class="shopping_list">`;
    let p;
    html += `<br><h5>Need to buy:</h5>`;
    for (let i = 0; i < shoppingList.length; i++) {
        p = shoppingList[i];
        if (p.buy == "no") {
            html += `
        <li>${p.name} x ${p.qty}</li>
        `;
        }
    }
    html += `<br><h5>Purchased:</h5>`;
    for (let i = 0; i < shoppingList.length; i++) {
        p = shoppingList[i];
        if (p.buy == "yes") {
            html += `
            <li>${p.name} x ${p.qty}</li>
            `;
        }
    }
    html += `</ol>`;
    document.getElementById("cart").innerHTML = html;
}

function addToCart(name, qty) {
    let i = inCart(name);
    if (i == -1) {
        shoppingList.push({
            "name": name,
            "qty": qty,
            "buy": "no"
        });
    } else {
        shoppingList[i].qty = parseInt(shoppingList[i].qty + parseInt(qty));
    }
}

function productPurchased() {
    let name = document.getElementById("name2").value;
    let i = inCart(name);
    if (i == -1) {
        alert("Enter valid name!");
    } else {
        shoppingList[i].buy = "yes";
        printCart();
    }
}

function inCart(name) {
    return shoppingList.findIndex((el, i, array) => {
        return el.name == name;
    });
}

function addProduct() {
    let name = document.getElementById("name").value,
        qty = parseInt(document.getElementById("qty").value),
        valid = true,
        errMsg = [];
    if (name == '') {
        valid = false;
        errMsg.push("Enter name!");
    }
    if (qty == '') {
        valid = false;
        errMsg.push("Enter qty!");
    }
    if (valid) {
        addToCart(name, qty);
        name = '';
        qty = '';
        buy = '';
        printCart();
    } else {
        if (errMsg.length != 0) {
            alert(errMsg.join(' '));
        }
    }
}

/*2) Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, 
количества и цены за единицу товара. Написать следующие функции:

Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке.*/
let check = [{
        "name": "Woter",
        "qty": 3,
        "price": 10.15
    },
    {
        "name": "Cheese",
        "qty": 1,
        "price": 40.75
    },
    {
        "name": "Bread",
        "qty": 2,
        "price": 7.5
    },
];

function printCheck() {
    let html = `<ol class="cart_list">`;
    let p;
    for (let i = 0; i < check.length; i++) {
        p = check[i];
        html += `
        <li>${p.name} ${p.price} x ${p.qty}</li>
        `;
    }
    html += `</ol>`;
    document.getElementById("check").innerHTML = html;
}

function sum() {
    let sum = 0;
    for (let i = 0; i < check.length; i++) {
        sum = sum + (parseFloat(check[i].price) * parseInt(check[i].qty));
    }
    document.getElementById("sum").innerHTML = `${sum.toFixed(2)} UAH`;
}

function mostExpensive() {
    let name = '',
        most = '';
    for (let i = 0; i < check.length; i++) {
        if (check[i].price > most) {
            most = check[i].price;
            name = check[i].name;
        } else {
            most = most;
            name = name;
        }
    }
    document.getElementById("most").innerHTML = `${name} - ${most.toFixed(2)} UAH`;
}

function averageCost() {
    let sum = 0,
        res = 0;
    for (let i = 0; i < check.length; i++) {
        sum = sum + check[i].price;
    }
    res = sum / check.length;
    document.getElementById("averageCost").innerHTML = `${res.toFixed(2)} UAH`;
}

/*3) Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью 
document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, 
перечисленными в массиве.*/
let cssStyle = [{
        "name": "color",
        "value": "#f00",
    },
    {
        "name": "font-size",
        "value": "32px",
    },
    {
        "name": "text-align",
        "value": "center",
    },
    {
        "name": "text-decoration",
        "value": "underline",
    }
];

function css_style() {
    debugger;
    let text = document.getElementById("text").value;
    let html = `<p style="`;
    let p;
    for (let i = 0; i < cssStyle.length; i++) {
        p = cssStyle[i];
        html += `
        ${p.name}:${p.value}; 
        `;
    }
    html += `">`
    document.getElementById("style").innerHTML = `${html}${text}</p>`;
}

/*4) Создать массив аудиторий академии. Объект-аудитория состоит из названия, 
количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. 
Написать несколько функций для работы с ним.

Вывод на экран всех аудиторий;
Вывод на экран аудиторий для указанного факультета;
Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит 
из названия, количества студентов и названия факультета;
Функция сортировки аудиторий по количеству мест;
Функция сортировки аудиторий по названию (по алфавиту).*/
let audienceList = [{
        "name": "1P",
        "qty": 20,
        "faculty": "Philosophy"
    },
    {
        "name": "2P",
        "qty": 14,
        "faculty": "Philosophy"
    },
    {
        "name": "3P",
        "qty": 10,
        "faculty": "Philosophy"
    },
    {
        "name": "1E",
        "qty": 20,
        "faculty": "Economy"
    },
    {
        "name": "2E",
        "qty": 10,
        "faculty": "Economy"
    },
    {
        "name": "1C",
        "qty": 20,
        "faculty": "Computer science"
    },
    {
        "name": "2C",
        "qty": 12,
        "faculty": "Computer science"
    }
];

function printAudience() {
    let html = `<ol>`;
    let p;
    for (let i = 0; i < audienceList.length; i++) {
        p = audienceList[i];
        html += `
        <li>${p.name}, ${p.qty}, ${p.faculty}</li>
        `;
    }
    html += `</ol>`;
    document.getElementById("audience_list").innerHTML = html;
}

function displayFaculty() {
    let html = `<ol>`;
    let p;
    let faculty = document.getElementById("faculty").value;
    for (let i = 0; i < audienceList.length; i++) {
        p = audienceList[i];
        if (p.faculty == faculty) {
            html += `
        <li>${p.name}, ${p.qty}</li>
        `;
        }
    }
    html += `</ol>`;
    document.getElementById("faculty_result").innerHTML = html;
}

function group() {
    let html = `<ol>`;
    let p;
    let name = document.getElementById("name_group").value,
        qty = document.getElementById("qty_group").value,
        faculty = document.getElementById("faculty_group").value;
    for (let i = 0; i < audienceList.length; i++) {
        p = audienceList[i];
        if (p.faculty == faculty && p.qty >= qty) {
            html += `
        <li>${name} - ${p.name}, ${p.qty}</li>
        `;
        }
    }
    html += `</ol>`;
    document.getElementById("group_result").innerHTML = html;
}

function sortQty() {
    debugger;
    audienceList.sort(function(a, b) {
        if (a.qty > b.qty) {
            return 1;
        } else if (a.qty < b.qty) {
            return -1;
        } else {
            return 0;
        }
    });
    let html = `<ol>`;
    let p;
    for (let i = 0; i < audienceList.length; i++) {
        p = audienceList[i];
        html += `
        <li>${p.name}, ${p.qty}, ${p.faculty}</li>
        `;
    }
    html += `</ol>`;
    document.getElementById("sort_qty").innerHTML = html;
}

function sortABC() {
    debugger;
    audienceList.sort(function(a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        } else {
            return 0;
        }
    });
    let html = `<ol>`;
    let p;
    for (let i = 0; i < audienceList.length; i++) {
        p = audienceList[i];
        html += `
        <li>${p.name}, ${p.qty}, ${p.faculty}</li>
        `;
    }
    html += `</ol>`;
    document.getElementById("sort_name").innerHTML = html;
};