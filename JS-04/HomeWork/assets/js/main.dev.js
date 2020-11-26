"use strict";

/*1) Написать функцию, которая принимает 2 числа и возвращает -1, 
если первое меньше, чем второе; 1 – если первое больше, чем второе; 
и 0 – если числа равны.*/
function task1() {
  var num1 = document.getElementById("num_1_1").value,
      num2 = document.getElementById("num_1_2").value,
      result = '';
  result = compNumbers(num1, num2);
  document.getElementById("res_1").innerHTML = result;
}

function compNumbers(a, b) {
  a = parseInt(a);
  b = parseInt(b);

  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
/*2) Написать функцию, которая вычисляет факториал переданного ей числа.*/


function task2() {
  var num = document.getElementById("num_2").value,
      result = '';
  result = factorial(num);
  document.getElementById("res_2").innerHTML = "".concat(num, "! = ").concat(result);
}

function factorial(n) {
  n = parseInt(n);
  var i = 0,
      res = 1;

  while (i < n) {
    i++;
    res = i * res;
  }

  return res;
}
/*3) Написать функцию, которая принимает три отдельные цифры и превращает их в 
одно число. Например: цифры 1, 4, 9 превратятся в число 149.*/


function task3() {
  var num1 = document.getElementById("num_3_1").value,
      num2 = document.getElementById("num_3_2").value,
      num3 = document.getElementById("num_3_3").value,
      result = '';
  result = glueNumber(num1, num2, num3);
  document.getElementById("res_3").innerHTML = result;
}

function glueNumber(a, b, c) {
  var res = 0;
  res = a + b + c;
  res = parseInt(res);
  return res;
}
/*4) Написать функцию, которая принимает длину и ширину прямоугольника 
и вычисляет его площадь. Если в функцию передали 1 параметр, 
то она вычисляет площадь квадрата.*/
//1  var

/*function task4() {
    let num1 = document.getElementById("num_4_1").value,
        num2 = document.getElementById("num_4_2").value,
        result = '';
    result = square(num1, num2);
    document.getElementById("res_4").innerHTML = `S = ${result}`;
}

function square(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    let s = '';
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return ("Invalid numbers!");
    } else if (Number.isNaN(a)) {
        s = b * b;
    } else if (Number.isNaN(b)) {
        s = a * a;
    } else {
        s = a * b;
    }
    return s;
}*/
//2 var


function task4() {
  var w = document.getElementById("num_4_1").value,
      h = document.getElementById("num_4_2").value,
      result = '';

  if (h == '') {
    result = square(w);
  } else {
    result = square(w, h);
  }

  document.getElementById("res_4").innerHTML = "S = ".concat(result);
}

function square(w, h) {
  if (typeof h == "undefined") {
    h = w;
  }

  return parseInt(w) * parseInt(h);
}
/*5) Написать функцию, которая проверяет, является ли переданное ей число 
совершенным. Совершенное число – это число, равное сумме всех своих собственных 
делителей.*/


function task5() {
  var num = document.getElementById("num_5").value,
      result = '';
  result = perfectNumber(num);
  document.getElementById("res_5").innerHTML = result;
}

function perfectNumber(a) {
  a = parseInt(a);
  var i = 0,
      test = '',
      res = 0;

  do {
    test = a / i;

    if (test % 1 == 0) {
      res = res + i;
      i++;
    } else {
      i++;
    }
  } while (i < a);

  res = res == a ? 'Yes' : 'No';
  return res;
}
/*6) Написать функцию, которая принимает минимальное и максимальное значения 
для диапазона, и выводит только те числа из диапазона, которые являются 
совершенными. Используйте написанную ранее функцию, чтобы узнавать, 
совершенное число или нет.*/


function task6() {
  var num1 = document.getElementById("num_6_1").value,
      num2 = document.getElementById("num_6_2").value,
      result = '';
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  while (num1 <= num2) {
    test = perfectNumber(num1);

    if (test == 'Yes') {
      result += num1 + ' ';
    }

    num1++;
  }

  document.getElementById("res_6").innerHTML = result;
}
/*7) Написать функцию, которая принимает время (часы, минуты, секунды) и 
выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты 
и/или секунды не были переданы, то выводить их как 00.*/


function task7() {
  var hours = document.getElementById("num_7_1").value,
      min = document.getElementById("num_7_2").value,
      sec = document.getElementById("num_7_3").value,
      time = '';
  hours = parseInt(hours);
  min = parseInt(min);
  sec = parseInt(sec);

  if (Number.isNaN(hours)) {
    hours = '00';
  } else {
    hours = addZero(hours);
  }

  if (Number.isNaN(min)) {
    min = '00';
  } else {
    min = addZero(min);
  }

  if (Number.isNaN(sec)) {
    sec = '00';
  } else {
    sec = addZero(sec);
  }

  time = "".concat(hours, " : ").concat(min, " : ").concat(sec);
  document.getElementById("res_7").innerHTML = time;
}

function addZero(n) {
  return n < 10 ? '0' + n : n + '';
}
/*8) Написать функцию, которая принимает часы, минуты и секунды и 
возвращает это время в секундах.*/


function task8() {
  var num1 = document.getElementById("num_8_1").value,
      num2 = document.getElementById("num_8_2").value,
      num3 = document.getElementById("num_8_3").value,
      result = '';
  result = timeInSec(num1, num2, num3);
  document.getElementById("res_8").innerHTML = result;
}

function timeInSec(hours, min, sec) {
  hours = parseInt(hours);
  min = parseInt(min);
  sec = parseInt(sec);

  if (Number.isNaN(hours)) {
    hours = 0;
  } else {
    hours = hours;
  }

  if (Number.isNaN(min)) {
    min = 0;
  } else {
    min = min;
  }

  if (Number.isNaN(sec)) {
    sec = 0;
  } else {
    sec = sec;
  }

  res = hours * 3600 + min * 60 + sec;
  return res;
}
/*9) Написать функцию, которая принимает количество секунд, переводит их в часы, 
минуты и секунды и возвращает в виде строки «чч:мм:сс».*/


function task9() {
  var num = document.getElementById("num_9").value,
      result = '';
  result = secInTime(num);
  document.getElementById("res_9").innerHTML = result;
}

function secInTime(s) {
  s = parseInt(s);
  var hours = 0,
      min = 0,
      sec = 0;
  hours = Math.floor(s / 3600);
  min = Math.floor((s - hours * 3600) / 60);
  sec = s - (hours * 3600 + min * 60);
  time = "".concat(addZero(hours), " : ").concat(addZero(min), " : ").concat(addZero(sec));
  return time;
}
/*10) Написать функцию, которая считает разницу между датами. Функция принимает 
6 параметров, которые описывают 2 даты, и возвращает результат в виде 
строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 
2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, 
а потом разницу переведите обратно в «чч:мм:сс»*/


function task10() {
  var h1 = document.getElementById("num_10_1").value,
      m1 = document.getElementById("num_10_2").value,
      s1 = document.getElementById("num_10_3").value,
      h2 = document.getElementById("num_10_4").value,
      m2 = document.getElementById("num_10_5").value,
      s2 = document.getElementById("num_10_6").value,
      result = '';
  result = diffTime(h1, m1, s1, h2, m2, s2);
  document.getElementById("res_10").innerHTML = result;
}

function diffTime(h1, m1, s1, h2, m2, s2) {
  var d1 = timeInSec(h1, m1, s1),
      d2 = timeInSec(h2, m2, s2),
      diff = 0,
      res = 0;

  if (d1 <= d2) {
    diff = d2 - d1;
  } else {
    diff = d1 - d2;
  }

  res = secInTime(diff);
  return res;
}