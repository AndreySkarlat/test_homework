"use strict";

//1) Подсчитать сумму всех чисел в заданном пользователем диапазоне.
function task1() {
  var num1 = document.getElementById("num_1_1").value,
      num2 = document.getElementById("num_1_2").value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  var res = 0;

  while (num1 <= num2) {
    res = res + num1;
    num1++;
  }

  document.getElementById("res_1").innerHTML = res;
} //2) Запросить 2 числа и найти только наибольший общий делитель.


function task2() {
  var num1 = document.getElementById("num_2_1").value,
      num2 = document.getElementById("num_2_2").value,
      res = 0;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  var lim = num1 < num2 ? num1 : num2;

  while (res <= 0) {
    if (num1 % lim == 0 && num2 % lim == 0) {
      res += lim;
    }

    lim--;
  }

  document.getElementById("res_2").innerHTML = res;
} //3) Запросить у пользователя число и вывести все делители этого числа.


function task3() {
  var num = document.getElementById("num_3").value;
  num = parseInt(num);
  var i = 0,
      test = '',
      res = '';

  do {
    test = num / i;

    if (test % 1 == 0) {
      res += i + ' ';
      i++;
    } else {
      i++;
    }
  } while (i <= num);

  document.getElementById("res_3").innerHTML = res;
} //4) Определить количество цифр в введенном числе.


function task4() {
  var num = document.getElementById("num_4").value;
  num = parseInt(num);
  var res = 0;

  while (num > 0) {
    num = (num / 10).toFixed(0);
    res++;
  }

  document.getElementById("res_4").innerHTML = res;
}
/*5) Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, 
отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. 
Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для 
ввода чисел пользователем.*/


function task5() {
  var num = '',
      pos = 0,
      neg = 0,
      zero = 0,
      even = 0,
      odd = 0,
      i = 0;

  while (i < 10) {
    i++;
    num = prompt("Enter number");
    num = parseInt(num);

    if (num == 0) {
      zero++;
    } else {
      if (num > 0) {
        pos++;

        if (num % 2 == 0) {
          even++;
        } else {
          odd++;
        }
      } else {
        neg++;

        if (num % 2 == 0) {
          even++;
        } else {
          odd++;
        }
      }
    }
  }

  document.getElementById("res_5").innerHTML = "Pos: ".concat(pos, ", Neg: ").concat(neg, ", Zero: ").concat(zero, ", Even: ").concat(even, ", Odd: ").concat(odd, ".");
}
/*6) Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
вывести результат и спросить, хочет ли он решить еще один пример. 
И так до тех пор, пока пользователь не откажется.*/


function task6() {
  var a = '',
      b = '',
      symbol = '';

  do {
    a = prompt('Enter number 1');
    a = parseInt(a);
    b = prompt('Enter number 2');
    b = parseInt(b);
    symbol = prompt('Enter symbol: - + / *');

    switch (symbol) {
      case '+':
        alert(a + b);
        break;

      case '-':
        alert(a - b);
        break;

      case '/':
        alert(a / b);
        break;

      case '*':
        alert(a * b);

      default:
        break;
    }
  } while (confirm('Would you like to solve another example?'));
}
/*7) Запросить у пользователя число и на сколько цифр его сдвинуть. 
Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, 
то получится 345612).*/


function task7() {
  var num = document.getElementById("num_7_1").value;
  num = parseInt(num);
  var step = document.getElementById("num_7_2").value;
  step = parseInt(step);
  var i = 0,
      side_a = num,
      side_b = num,
      res = '';
  step = parseInt(step);

  while (i < step) {
    side_a = Math.floor(side_a / 10);
    i++;
  }

  side_b = num % Math.pow(10, step);
  res = "".concat(side_b).concat(side_a);
  document.getElementById("res_7").innerHTML = res;
}
/*8) Зациклить вывод дней недели таким образом: «День недели. 
Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.*/


function task8() {
  debugger;
  var day = 1;

  do {
    switch (day) {
      case 1:
        alert('Sunday');
        break;

      case 2:
        alert('Monday');
        break;

      case 3:
        alert('Tuesday');
        break;

      case 4:
        alert('Wednesday');
        break;

      case 5:
        alert('Thursday');
        break;

      case 6:
        alert('Friday');
        break;

      case 7:
        alert('Saturday');
        break;
    }

    if (day == 7) {
      day = 1;
    } else {
      day++;
    }
  } while (confirm("Show next day?"));
}
/*9) Вывести таблицу умножения для всех чисел от 2 до 9. 
Каждое число необходимо умножить на числа от 1 до 10.*/


function task9() {
  var a = '',
      b = '',
      c = '';

  for (a = 2; a < 10; a++) {
    for (b = 1; b <= 10; b++) {
      c = a * b;

      if (b < 10) {
        document.write("".concat(a, " * ").concat(b, " = ").concat(c, "<br>"));
      } else {
        document.write("".concat(a, " * ").concat(b, " = ").concat(c, "<br><br>"));
      }
    }
  }
}
/*Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и 
отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, 
записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
В зависимости от того, что указал пользователь, уменьшаете диапазон. 
Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. 
И так до тех пор, пока пользователь не выберет == N.*/


function task10() {
  //debugger;
  var x = 0,
      y = 100,
      N = 0,
      num = document.getElementById("num_10").value;
  num = parseInt(num);

  if (N == num) {
    alert("Your number - " + N);
  } else {
    while (N != num) {
      N = (x + y) / 2;
      N = parseInt(N);

      if (N == num) {
        alert("Your number - " + N);
      } else {
        if (N < num) {
          x = N + 1;
          y = y;
        } else {
          x = x;
          y = N - 1;
        }
      }
    }
  }
}