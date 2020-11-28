"use strict";

/*1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, 
    средняя скорость), и следующие функции для работы с этим объектом:

Функция для вывода на экран информации об автомобиле;

Функция для подсчета необходимого времени для преодоления переданного 
расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги 
водителю необходимо делать перерыв на 1 час.*/
function task1_1() {
  var result = '';
  result = carInfo();
  document.getElementById("res_1_1").innerHTML = result;
}

function task1_2() {
  var km = document.getElementById("num_1").value,
      result = '';
  result = travelTime(km);
  document.getElementById("res_1_2").innerHTML = result;
}

var $car = {
  "Car brand": "Tesla",
  "Car model": "Model 3",
  "Year": 2020,
  "Avg speed (km / h)": 120,
  "Color": "Black",
  "Max speed (km / h)": 225,
  "Power reserve: up to": "560 km",
  "Body": "Sedan",
  "Battery (kW)": 75,
  "Transmission": "automatic"
};

function carInfo() {
  var res = "<ul>";

  for (var k in $car) {
    res += "<li><b>".concat(k, ":</b> ").concat($car[k], "</li>");
  }

  res += "</ul>";
  return res;
}

function travelTime(km) {
  km = parseInt(km);
  var time = 0,
      pause = 0,
      trTime = 0;
  time = km / $car["Avg speed (km / h)"];
  pause = Math.floor(time / 4);
  trTime = (time + pause) * 3600;
  return secInTime(trTime);
}
/* ===== SEC IN TIME ===== */


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
/* ===== ADD ZERO ===== */


function addZero(n) {
  return n < 10 ? '0' + parseInt(n) : parseInt(n) + '';
}
/* 2) Создать объект, хранящий в себе отдельно числитель и знаменатель 
дроби, и следующие функции для работы с этим объектом: 

2.1 Функция сложения 2-х объектов-дробей;

2.2 Функция вычитания 2-х объектов-дробей;

2.3 Функция умножения 2-х объектов-дробей;

2.4 Функция деления 2-х объектов-дробей;

2.5 Функция сокращения объекта-дроби.*/


var $fraction1 = {
  a: 4,
  b: 3
};
var $fraction2 = {
  a: 1,
  b: 9
};
/* ===== + ===== */

function task2_1() {
  var result = '';
  result = addingFraction();
  document.getElementById("res_2_1").innerHTML = reduction(result.aadd, result.badd);
}

function addingFraction() {
  var nok = 0,
      aadd = 0,
      badd = 0,
      res = '';

  if ($fraction1.b !== $fraction2.b) {
    nok = $fraction1.b * $fraction2.b / lcd($fraction1.b, $fraction2.b);
    badd = nok;
    aadd = $fraction1.a * (nok / $fraction1.b) + $fraction2.a * (nok / $fraction2.b);
  } else {
    badd = b;
    aadd = $fraction1.a + $fraction2.a;
  }

  res = {
    aadd: aadd,
    badd: badd
  };
  return res;
}
/* ===== NOD ===== */


function lcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  var res = 0;
  var lim = a < b ? a : b;

  while (res <= 0) {
    if (a % lim == 0 && b % lim == 0) {
      res += lim;
    }

    lim--;
  }

  res = parseInt(res);
  return res;
}
/* ===== - ===== */


function task2_2() {
  var result = '';
  result = subtrFraction();
  document.getElementById("res_2_2").innerHTML = reduction(result.asub, result.bsub);
}

function subtrFraction() {
  var nok = 0,
      asub = 0,
      bsub = 0,
      res = '';

  if ($fraction1.b !== $fraction2.b) {
    nok = $fraction1.b * $fraction2.b / lcd($fraction1.b, $fraction2.b);
    bsub = nok;
    asub = $fraction1.a * (nok / $fraction1.b) - $fraction2.a * (nok / $fraction2.b);
  } else {
    bsub = b;
    asub = $fraction1.a - $fraction2.a;
  }

  res = {
    asub: asub,
    bsub: bsub
  };
  return res;
}
/* ===== * ===== */


function task2_3() {
  var result = '';
  result = multiplFraction();
  document.getElementById("res_2_3").innerHTML = reduction(result.amult, result.bmult);
}

function multiplFraction() {
  var amult = 0,
      bmult = 0,
      res = '';
  amult = $fraction1.a * $fraction2.a;
  bmult = $fraction1.b * $fraction2.b;
  res = {
    amult: amult,
    bmult: bmult
  };
  return res;
}
/* ===== / ===== */


function task2_4() {
  var result = '';
  result = divisionFraction();
  document.getElementById("res_2_4").innerHTML = reduction(result.adiv, result.bdiv);
}

function divisionFraction() {
  var adiv = 0,
      bdiv = 0,
      res = '';
  adiv = $fraction1.a * $fraction2.b;
  bdiv = $fraction1.b * $fraction2.a;
  res = {
    adiv: adiv,
    bdiv: bdiv
  };
  return res;
}
/* ===== REDUCTION ===== */


function reduction(a, b) {
  var x = lcd(a, b),
      c = '';

  if (x > 1) {
    a = a / x;
    b = b / x;
  } else {
    a = a;
    b = b;
  }

  if (a > b) {
    c = Math.floor(a / b);
    a = a - c * b;

    if (a == 0) {
      return "".concat(c);
    } else {
      return "".concat(c, " ").concat(a, "/").concat(b);
    }
  } else if (a == b) {
    c = 1;
    return "".concat(c);
  } else {
    return "".concat(a, "/").concat(b);
  }
}
/*3. Создать объект, описывающий время (часы, минуты, секунды), 
и следующие функции для работы с этим объектом: 

Функция вывода времени на экран;

Функция изменения времени на переданное количество секунд;

Функция изменения времени на переданное количество минут;

Функция изменения времени на переданное количество часов. 

Учтите, что в последних 3-х функциях, при изменении одной части 
времени, может измениться и другая. Например, если ко времени «20:30:45» 
добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75». */


var $time = {
  hours: 3,
  min: 11,
  sec: 32
};
console.log($time);

function task3_1() {
  var result = 0;
  result = displayTime();
}

function displayTime() {
  $time.hours = addZero($time.hours);
  $time.min = addZero($time.min);
  $time.sec = addZero($time.sec);
  alert("".concat($time.hours, ":").concat($time.min, ":").concat($time.sec));
}

function changeSec() {
  var sec = document.getElementById("num_3_1").value;
  sec = parseInt(sec);
  $time.sec = parseInt($time.sec);
  $time.min = parseInt($time.min);
  $time.sec += sec;

  if ($time.sec >= 60) {
    $time.sec = $time.sec - 60;
    $time.min = $time.min + 1;
  } else {
    $time.sec = $time.sec;
  }
}

function changeMin() {
  var min = document.getElementById("num_3_2").value;
  min = parseInt(min);
  $time.min = parseInt($time.min);
  $time.hours = parseInt($time.hours);
  $time.min += min;

  if ($time.min >= 60) {
    $time.min = $time.min - 60;
    $time.hours = $time.hours + 1;
  } else {
    $time.min = $time.min;
  }
}

function changeHours() {
  var hours = document.getElementById("num_3_3").value;
  hours = parseInt(hours);
  $time.hours = parseInt($time.hours);
  $time.hours += hours;

  if ($time.hours >= 24) {
    $time.hours = $time.hours - 24;
    alert("Next day");
  } else {
    $time.hours = $time.hours;
  }
}