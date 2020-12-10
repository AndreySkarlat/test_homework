"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

    - поле, хранящее радиус окружности;
    - get-свойство, возвращающее радиус окружности;
    - set-свойство, устанавливающее радиус окружности;
    - get-свойство, возвращающее диаметр окружности;
    - метод, вычисляющий площадь окружности;
    - метод, вычисляющий длину окружности.

Продемонстрировать работу свойств и методов.*/
var Ring =
/*#__PURE__*/
function () {
  function Ring(r) {
    _classCallCheck(this, Ring);

    this.r = r;
  }

  _createClass(Ring, [{
    key: "P",
    value: function P() {
      return Math.PI * (this.r * this.r);
    }
  }, {
    key: "S",
    value: function S() {
      return 2 * Math.PI * this.r;
    }
  }, {
    key: "radius",
    get: function get() {
      return this.r;
    },
    set: function set(r) {
      this.r = r;
    }
  }, {
    key: "d",
    get: function get() {
      return this.r * 2;
    }
  }]);

  return Ring;
}();

function task01() {
  var r = document.getElementById("number").value,
      ring = new Ring(r);
  document.getElementById("res_01").innerHTML = "r = ".concat(ring.radius, ", d = ").concat(ring.d, ", P = ").concat(ring.P().toFixed(2), ", S = ").concat(ring.S().toFixed(2));
}

;
/*2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

    - поле, которое хранит цвет маркера;
    - поле, которое хранит количество чернил в маркере (в процентах);
    - метод для печати (метод принимает строку и выводит текст соответствующим цветом;
      текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ –
      это 0,5% чернил в маркере).

Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив 
метод для заправки маркера.*/

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, perc) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.perc = parseInt(perc);
  }

  _createClass(Marker, [{
    key: "print",
    value: function print(text) {
      var html = "<p style=\"color:".concat(this.color, "\">");

      for (var i = 0; i < text.length; i++) {
        if (this.perc != 0) {
          if (text[i] == " ") {
            this.perc += 0.5;
          }

          html += "".concat(text[i]);
          this.perc -= 0.5;
        } else {
          alert("Marker is over!");
          break;
        }
      }

      html += "</p>";
      return html;
    }
  }, {
    key: "markerPerc",
    get: function get() {
      return this.perc;
    },
    set: function set(newPerc) {
      this.perc = newPerc;
    }
  }]);

  return Marker;
}();

var FilledMarker =
/*#__PURE__*/
function (_Marker) {
  _inherits(FilledMarker, _Marker);

  function FilledMarker() {
    _classCallCheck(this, FilledMarker);

    return _possibleConstructorReturn(this, _getPrototypeOf(FilledMarker).apply(this, arguments));
  }

  _createClass(FilledMarker, [{
    key: "fill",
    value: function fill(perc) {
      this.perc = parseInt(this.perc) + parseInt(perc);

      if (this.perc > 100) {
        this.perc = 100;
      }

      return this.perc;
    }
  }]);

  return FilledMarker;
}(Marker);

var marker = new FilledMarker('#28a745', 10);

function task02_1() {
  var text = document.getElementById("text").value;
  document.getElementById("res_02").innerHTML = marker.print(text);
}

;

function task02_2() {
  var perc = document.getElementById("percent").value;
  marker.perc = marker.fill(perc);
}

;
/*3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. 
Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

Создать объект класса EmpTable и вывести на экран результат работы метода getHtml(). */

var Employee = function Employee(name, position, salary) {
  _classCallCheck(this, Employee);

  this.name = name;
  this.position = position;
  this.salary = salary;
};

var arrEmployee = [{
  "name": "George Clooney",
  "position": "Team Lead",
  "salary": 1000
}, {
  "name": "Brad Pitt",
  "position": "1st Friend",
  "salary": 900
}, {
  "name": "Matt Damon",
  "position": "2nd Friend",
  "salary": 800
}, {
  "name": "Bernie Mac",
  "position": "3rd Friend",
  "salary": 700
}, {
  "name": "Elliott Gould",
  "position": "4th Friend",
  "salary": 600
}, {
  "name": "Casey Affleck",
  "position": "5th Friend",
  "salary": 500
}, {
  "name": "Scott Caan",
  "position": "6th Friend",
  "salary": 500
}, {
  "name": "Eddie Jemison",
  "position": "7th Friend",
  "salary": 500
}, {
  "name": "Don Cheadle",
  "position": "8th Friend",
  "salary": 500
}, {
  "name": "Shaobo Qin",
  "position": "9th Friend",
  "salary": 500
}, {
  "name": "Carl Reiner",
  "position": "10th Friend",
  "salary": 500
}, {
  "name": "Julia Roberts",
  "position": "Bookkeeper",
  "salary": 1000
}];

var EmpTable =
/*#__PURE__*/
function () {
  function EmpTable(arr) {
    _classCallCheck(this, EmpTable);

    this.arr = arr;
  }

  _createClass(EmpTable, [{
    key: "getHtml",
    value: function getHtml() {
      var tr;
      var html = "<table class=\"table table-striped\">\n                        <h2 style=\"text-transform:uppercase\"> Bank employees </h2>\n                            <tr> \n                                <th scope=\"col\"> Name </th>\n                                <th scope=\"col\"> Position </th>\n                                <th scope=\"col\"> Salary </th>\n                            </tr>\n        ";

      for (var i = 0; i < arrEmployee.length; i++) {
        tr = arrEmployee[i];
        html += "\n            <tr>\n                <td>".concat(tr.name, "</td>\n                <td>").concat(tr.position, "</td>\n                <td>").concat(tr.salary, "</td>\n            </tr>\n            ");
      }

      html += "</table>";
      return html;
    }
  }]);

  return EmpTable;
}();

var tableObj = new EmpTable(arrEmployee);

function task03() {
  document.getElementById("res_03").innerHTML = tableObj.getHtml();
}

;