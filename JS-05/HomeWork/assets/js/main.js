/*1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, 
    средняя скорость), и следующие функции для работы с этим объектом:

Функция для вывода на экран информации об автомобиле;

Функция для подсчета необходимого времени для преодоления переданного 
расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги 
водителю необходимо делать перерыв на 1 час.*/
function task1_1() {
    let result = '';
    result = carInfo();
    document.getElementById("res_1_1").innerHTML = result;
}

function task1_2() {
    let km = document.getElementById("num_1").value,
        result = '';
    result = travelTime(km);
    document.getElementById("res_1_2").innerHTML = result;
}

let $car = {
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
    let res = `<ul>`;
    for (let k in $car) {
        res += `<li><b>${k}:</b> ${$car[k]}</li>`;
    }
    res += `</ul>`;
    return res;
}

function travelTime(km) {
    km = parseInt(km);
    let time = 0,
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
    let hours = 0,
        min = 0,
        sec = 0;
    hours = Math.floor(s / 3600);
    min = Math.floor((s - hours * 3600) / 60);
    sec = s - (hours * 3600 + min * 60);
    time = `${addZero(hours)} : ${addZero(min)} : ${addZero(sec)}`;
    return time;
}


/* ===== ADD ZERO ===== */

function addZero(n) {
    return (n < 10) ? '0' + parseInt(n) : parseInt(n) + '';
}


/* 2) Создать объект, хранящий в себе отдельно числитель и знаменатель 
дроби, и следующие функции для работы с этим объектом: 

2.1 Функция сложения 2-х объектов-дробей;

2.2 Функция вычитания 2-х объектов-дробей;

2.3 Функция умножения 2-х объектов-дробей;

2.4 Функция деления 2-х объектов-дробей;

2.5 Функция сокращения объекта-дроби.*/

let $fraction1 = {
    a: 4,
    b: 3
};

let $fraction2 = {
    a: 1,
    b: 9
};

/* ===== + ===== */

function task2_1() {
    let result = '';
    result = addingFraction();
    document.getElementById("res_2_1").innerHTML = reduction(result.aadd, result.badd);
}

function addingFraction() {
    let nok = 0,
        aadd = 0,
        badd = 0,
        res = '';
    if ($fraction1.b !== $fraction2.b) {
        nok = $fraction1.b * $fraction2.b / lcd($fraction1.b, $fraction2.b);
        badd = nok;
        aadd = ($fraction1.a * (nok / $fraction1.b)) + ($fraction2.a * (nok / $fraction2.b));
    } else {
        badd = b;
        aadd = $fraction1.a + $fraction2.a;
    }
    res = { aadd, badd };
    return res;
}

/* ===== NOD ===== */

function lcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    let res = 0;
    let lim = (a < b) ? a : b;
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
    let result = '';
    result = subtrFraction();
    document.getElementById("res_2_2").innerHTML = reduction(result.asub, result.bsub);
}

function subtrFraction() {
    let nok = 0,
        asub = 0,
        bsub = 0,
        res = '';
    if ($fraction1.b !== $fraction2.b) {
        nok = $fraction1.b * $fraction2.b / lcd($fraction1.b, $fraction2.b);
        bsub = nok;
        asub = ($fraction1.a * (nok / $fraction1.b)) - ($fraction2.a * (nok / $fraction2.b));
    } else {
        bsub = b;
        asub = $fraction1.a - $fraction2.a;
    }
    res = { asub, bsub };
    return res;
}

/* ===== * ===== */

function task2_3() {
    let result = '';
    result = multiplFraction();
    document.getElementById("res_2_3").innerHTML = reduction(result.amult, result.bmult);
}

function multiplFraction() {
    let amult = 0,
        bmult = 0,
        res = '';
    amult = $fraction1.a * $fraction2.a;
    bmult = $fraction1.b * $fraction2.b;
    res = { amult, bmult };
    return res;
}

/* ===== / ===== */

function task2_4() {
    let result = '';
    result = divisionFraction();
    document.getElementById("res_2_4").innerHTML = reduction(result.adiv, result.bdiv);
}

function divisionFraction() {
    let adiv = 0,
        bdiv = 0,
        res = '';
    adiv = $fraction1.a * $fraction2.b;
    bdiv = $fraction1.b * $fraction2.a;
    res = { adiv, bdiv };
    return res;
}

/* ===== REDUCTION ===== */

function reduction(a, b) {
    let x = lcd(a, b),
        c = '';
    if (x > 1) {
        a = a / x;
        b = b / x;
    } else {
        a = a;
        b = b
    }
    if (a > b) {
        c = Math.floor(a / b);
        a = a - (c * b);
        if (a == 0) {
            return `${c}`;
        } else {
            return `${c} ${a}/${b}`;
        }
    } else if (a == b) {
        c = 1;
        return `${c}`;
    } else {
        return `${a}/${b}`;
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

let $time = {
    hours: 3,
    min: 11,
    sec: 32
};
console.log($time)

function task3_1() {
    let result = 0;
    result = displayTime();
}

function displayTime() {
    $time.hours = addZero($time.hours);
    $time.min = addZero($time.min);
    $time.sec = addZero($time.sec);
    alert(`${$time.hours}:${$time.min}:${$time.sec}`);
}

function changeSec() {
    let sec = document.getElementById("num_3_1").value;
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
    let min = document.getElementById("num_3_2").value;
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
    let hours = document.getElementById("num_3_3").value;
    hours = parseInt(hours);
    $time.hours = parseInt($time.hours);
    $time.hours += hours;
    if ($time.hours >= 24) {
        $time.hours = $time.hours - 24;
        alert("Next day")
    } else {
        $time.hours = $time.hours;
    }
}