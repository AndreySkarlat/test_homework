"use strict";

/*1) Запросить у пользователя его возраст и определить, кем он является: 
ребенком (0–12), подростком (12–18), взрослым (18-60) или пенсионером (60– ...).*/
function task1() {
  var num = document.getElementById("number1").value;
  num = parseInt(num);
  var rez = '';

  if (num >= 0 && num < 12) {
    rez = 'Сhild';
  } else if (num >= 12 && num < 18) {
    rez = 'Teenager';
  } else if (num >= 18 && num < 60) {
    rez = 'Adult';
  } else if (num >= 60) {
    rez = 'Pensioner';
  } else {
    rez = 'Invalid number';
  }

  document.getElementById('result_1').innerText = rez;
}
/*2) Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
который расположен на этой клавише (1–!, 2–@, 3–# и т. д).*/


function task2() {
  var num = document.getElementById('number2').value;
  num = parseInt(num);
  var rez = '';

  switch (num) {
    case 0:
      rez = ')';
      break;

    case 1:
      rez = '!';
      break;

    case 2:
      rez = '@';
      break;

    case 3:
      rez = '#';
      break;

    case 4:
      rez = '$';
      break;

    case 5:
      rez = '%';
      break;

    case 6:
      rez = 'ˆ';
      break;

    case 7:
      rez = '&';
      break;

    case 8:
      rez = '*';
      break;

    case 9:
      rez = '(';
      break;

    default:
      rez = 'Invalid number';
      break;
  }

  document.getElementById('result_2').innerText = rez;
} //3) Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.


function task3() {
  var num = document.getElementById('number3').value;
  num = parseInt(num);
  var one = Math.floor(num % 10),
      two = Math.floor(num % 100 / 10),
      tree = Math.floor(num / 100),
      rez = '';

  if (num >= 100 && num <= 999) {
    if (one == two || one == tree || two == tree) {
      rez = 'Yes';
    } else {
      rez = 'No';
    }
  } else {
    rez = 'Invalid number';
  }

  document.getElementById('result_3').innerText = rez;
}
/*4) Запросить у пользователя год и проверить, високосный он или нет. 
Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.*/


function task4() {
  var num = document.getElementById('number4').value;
  num = parseInt(num);
  var rez = '';

  if (num >= 0 && num <= 9999) {
    if (num % 400 == 0 || num % 4 == 0 && num % 100 != 0) {
      rez = 'Leap year';
    } else {
      rez = 'No';
    }
  } else {
    rez = 'Invalid number';
  }

  document.getElementById('result_4').innerText = rez;
} //5) Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.


function task5() {
  var num = document.getElementById('number5').value;
  num = parseInt(num);
  var rez = '';
  var one = Math.floor(num % 10);
  var two = Math.floor(num % 100 / 10); //let tree = Math.floor(num % 1000 / 100);

  var four = Math.floor(num % 10000 / 1000);
  var five = Math.floor(num / 10000);

  if (num >= 10000 && num <= 99999) {
    if (one == five && two == four) {
      rez = 'Yes';
    } else {
      rez = 'No';
    }
  } else {
    rez = 'Invalid number';
  }

  document.getElementById('result_5').innerText = rez;
}
/*6) Написать конвертор валют. Пользователь вводит количество USD, выбирает, 
в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.*/


function task6() {
  var num = document.getElementById('number6').value;
  var action = document.getElementById('inputGroupSelect01').value;
  num = parseInt(num);
  var EUR = 33.1441;
  var UAH = 28.1610;
  var AZN = 16.5672;
  var rez = '';

  switch (action) {
    case 'EUR':
      rez = (num * UAH / EUR).toFixed(2);
      break;

    case 'UAH':
      rez = (num * UAH).toFixed(2);
      break;

    case 'AZN':
      rez = (num * UAH / AZN).toFixed(2);
      break;

    default:
      rez = 'Select currency!';
      break;
  }

  document.getElementById('result_6').innerText = rez;
}
/*7) Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.*/


function task7() {
  var num = document.getElementById('number7').value;
  num = parseFloat(num);
  var rez = '';

  if (num > 0 && num < 200) {
    rez = num.toFixed(2);
  } else if (num >= 200 && num < 300) {
    rez = (num - num * 3 / 100).toFixed(2);
  } else if (num >= 300 && num < 500) {
    rez = (num - num * 5 / 100).toFixed(2);
  } else if (num >= 500) {
    rez = (num - num * 7 / 100).toFixed(2);
  } else {
    rez = 'Invalid number';
  }

  document.getElementById('result_7').innerText = rez;
}
/*8) Запросить у пользователя длину окружности и периметр квадрата. 
Определить, может ли такая окружность поместиться в указанный квадрат.*/


function task8() {
  var num1 = document.getElementById('number8_1').value;
  num1 = parseFloat(num1);
  var num2 = document.getElementById('number8_2').value;
  num2 = parseFloat(num2);
  var rez = '';
  var circleDiameter = num1 / Math.PI;
  var squareSide = num2 / 4;

  if (squareSide >= circleDiameter) {
    rez = 'Yes';
  } else {
    rez = 'No';
  }

  document.getElementById('result_8').innerText = rez;
}
/*Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
За каждый правильный ответ начисляется 2 балла. 
После вопросов выведите пользователю количество набранных баллов.*/


function task9() {
  debugger;
  var num1 = document.getElementById('question_1').value,
      num2 = document.getElementById('question_2').value,
      num3 = document.getElementById('question_3').value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  num3 = parseInt(num3);
  var q1 = num1 == 1 ? 2 : 0,
      q2 = num2 == 2 ? 2 : 0,
      q3 = num3 == 3 ? 2 : 0,
      rez = q1 + q2 + q3;
  document.getElementById('result_9').innerText = rez;
}
/*Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
Учтите возможность перехода на следующий месяц, год, а также високосный год.*/


function task10() {
  //debugger;
  var day = document.getElementById('daySelect').value,
      month = document.getElementById('monthSelect').value,
      year = document.getElementById('yearSelect').value;
  day = parseInt(day);
  var resDay = '',
      resMonth = '',
      resYear = '';

  switch (day) {
    case 1:
      resDay = '0' + (day + 1);
      break;

    case 2:
      resDay = '0' + (day + 1);
      break;

    case 3:
      resDay = '0' + (day + 1);
      break;

    case 4:
      resDay = '0' + (day + 1);
      break;

    case 5:
      resDay = '0' + (day + 1);
      break;

    case 6:
      resDay = '0' + (day + 1);
      break;

    case 7:
      resDay = '0' + (day + 1);
      break;

    case 8:
      resDay = '0' + (day + 1);
      break;

    case 9:
      resDay = day + 1;
      break;

    case 10:
      resDay = day + 1;
      break;

    case 11:
      resDay = day + 1;
      break;

    case 12:
      resDay = day + 1;
      break;

    case 13:
      resDay = day + 1;
      break;

    case 14:
      resDay = day + 1;
      break;

    case 15:
      resDay = day + 1;
      break;

    case 16:
      resDay = day + 1;
      break;

    case 17:
      resDay = day + 1;
      break;

    case 18:
      resDay = day + 1;
      break;

    case 19:
      resDay = day + 1;
      break;

    case 20:
      resDay = day + 1;
      break;

    case 21:
      resDay = day + 1;
      break;

    case 22:
      resDay = day + 1;
      break;

    case 23:
      resDay = day + 1;
      break;

    case 24:
      resDay = day + 1;
      break;

    case 25:
      resDay = day + 1;
      break;

    case 26:
      resDay = day + 1;
      break;

    case 27:
      resDay = day + 1;

    case 28:
      if (month == 2 && (year % 400 == 0 || year % 4 == 0 && year % 100 != 0)) {
        resDay = day + 1;
      } else if (month == 2) {
        resDay = '0' + 1;
      } else {
        resDay = day + 1;
      }

      break;

    case 29:
      if (month == 2 && (year % 400 == 0 || year % 4 == 0 && year % 100 != 0)) {
        resDay = '0' + 1;
      } else if (month == 2) {
        resDay = 'Invalid date!';
      } else {
        resDay = day + 1;
      }

      break;

    case 30:
      if (month == 2) {
        resDay = 'Invalid date!';
      } else {
        resDay = month == 4 || month == 6 || month == 9 || month == 11 ? '0' + 1 : day + 1;
      }

      break;

    case 31:
      if (month == 2 || month == 4 || month == 6 || month == 9 || month == 11) {
        resDay = 'Invalid date!';
      } else {
        resDay = '0' + 1;
      }

      break;
  }

  switch (month) {
    case '1':
      resMonth = day == 31 ? 'February' : 'January';
      break;

    case '2':
      if (day == 28 && (year % 400 == 0 || year % 4 == 0 && year % 100 != 0)) {
        resMonth = 'February';
      } else if (day == 28) {
        resMonth = 'March';
      } else if (day == 29 && (year % 400 == 0 || year % 4 == 0 && year % 100 != 0)) {
        resMonth = 'March';
      } else if (day == 29 || day == 30 || day == 31) {
        resMonth = ' ';
      } else {
        resMonth = 'February';
      }

      break;

    case '3':
      resMonth = day == 31 ? 'April' : 'March';
      break;

    case '4':
      resMonth = day == 30 ? 'May' : 'April';
      break;

    case '5':
      resMonth = day == 31 ? 'June' : 'May';
      break;

    case '6':
      resMonth = day == 30 ? 'July' : 'June';
      break;

    case '7':
      resMonth = day == 31 ? 'August' : 'July';
      break;

    case '8':
      resMonth = day == 31 ? 'September' : 'August';
      break;

    case '9':
      resMonth = day == 30 ? 'October' : 'September';
      break;

    case '10':
      resMonth = day == 31 ? 'November' : 'October';
      break;

    case '11':
      resMonth = day == 30 ? 'December' : 'November';
      break;

    case '12':
      resMonth = day == 31 ? 'January' : 'December';
      break;
  }

  resYear = day == 31 && month == 12 ? parseInt(year) + 1 : year;
  document.getElementById('result_10').innerText = "".concat(resDay, " ").concat(resMonth, " ").concat(resYear);
}