//HOMEWORK_JS-01
//1) Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
function yourName() {
    let name = prompt("Enter your name"),
        res = name;
    alert(`Привет, ${res}!`);
}

// 2) Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
function age() {
    let birth_year = prompt("Enter your year of birth");
    let now = new Date();
    const current_year = now.getFullYear();
    let res = current_year - parseInt(birth_year);
    alert(res);
}

//3) Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
function square() {
    let side = prompt("Enter the length of the side of the square"),
        res = side * 4;
    alert(`P = ${res}`);
}

//4) Запросите у пользователя радиус окружности и выведите площадь такой окружности.
function circle() {
    let radius = prompt("Enter circle radius"),
        res = Math.PI * (Math.pow(radius, 2));
    alert(`S = ${res.toFixed(2)}`);
}

//5) Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
function city() {
    let distance = prompt("Enter distance in km between two cities"),
        time = prompt("Enter number of hours for the road"),
        res = parseInt(distance) / parseInt(time);
    alert(`${res.toFixed(0)}км/ч`);
}

//6) Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
function USDtoEUR() {
    let USD = prompt("Enter the amount in dollars")
    const USDtoUAH = 28.1116;
    const UAHtoEUR = 33.3938;
    let res = parseInt(USD) * USDtoUAH / UAHtoEUR;
    alert(`${res.toFixed(0)} EURO`);
}

//7) Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
function flash() {
    debugger;
    let amount = prompt("Enter the amount of flash drive in GB");
    let convert = 1024 * parseInt(amount);
    const file = 820;
    let res = convert / file;
    alert(`${Math.floor(res)} file(s)`);
}

//8) Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
function chocolate() {
    let cash = prompt("Enter the amount of cash");
    let cost = prompt("Enter the cost of one chocolate");
    let chocoNumber = parseFloat(cash) / parseFloat(cost);
    let res = parseFloat(cash) - (Math.floor(chocoNumber) * parseFloat(cost));
    alert(`${Math.floor(chocoNumber)} chocolate(s), rest: ${res.toFixed(2)} UAH`);
}

//9) Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
function reverse() {
    let number = prompt("Enter number");
    let one = parseInt(number) % 10;
    let two = Math.floor(parseInt(number) % 100 / 10);
    let three = Math.floor(parseInt(number) / 100);
    alert(`${one}${two}${three}`);
}

// 10) Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
function bank() {
    let amount = prompt("Enter amount");
    let monthly = (parseFloat(amount) / 100 * 5) / 12;
    let res = monthly.toFixed(2) * 2;
    alert(res);
}