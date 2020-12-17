"use strict";

var Currents = 0;
var FlagNewNum = false;
var PendingOp = ""; //нажатие цифровой кнопки

$(".num").click(function () {
  if (FlagNewNum) {
    $('#display').val($(this).val());
    FlagNewNum = false;
  } else {
    if ($('#display').val() == "0") {
      $('#display').val($(this).val());
    } else {
      $('#display').val($('#display').val() + $(this).val());
    }
  }
}); // кнопки действия

$(".operation").click(function () {
  if (FlagNewNum && PendingOp != "=") {
    $('#display').val(parseFloat(Currents));
  } else {
    FlagNewNum = true;
    if ('+' == PendingOp) Currents += parseFloat($('#display').val());else if ('-' == PendingOp) Currents -= parseFloat($('#display').val());else if ('/' == PendingOp) Currents /= parseFloat($('#display').val());else if ('*' == PendingOp) Currents *= parseFloat($('#display').val());else Currents = parseFloat($('#display').val());
    $('#display').val(parseFloat(Currents));
    PendingOp = $(this).val();
  }
}); // добавление десятичной точки с числу

$(".decimal").click(function () {
  if (FlagNewNum) {
    $('#display').val("0.");
    FlagNewNum = false;
  } else {
    if ($('#display').val().indexOf(".") == -1) $('#display').val($('#display').val() + ".");
  }
}); // Очистка текущего результата

$(".clear-entry").click(function () {
  $('#display').val("0");
  FlagNewNum = true;
}); // Полная очистка всех результатов

$(".clear").click(function () {
  $('#display').val("0");
  FlagNewNum = true;
  Currents = 0;
  PendingOp = "";
}); // меняем знак текущего результата

$(".neg").click(function () {
  $('#display').val(parseFloat($('#display').val()) * -1);
}); // вычисляем значение процентов

$(".percent").click(function () {
  $('#display').val(parseFloat($('#display').val()) / 100);
});