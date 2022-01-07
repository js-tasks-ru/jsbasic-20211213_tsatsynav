let result

function factorial(n) {
  for (result = 1; n > 1; n--) {
    result *= n;
  }
  return result
  console.log(`факториал ${n} равен ${result}`);
}

factorial(0);
factorial(1);
factorial(3);
factorial(5);

//Корректность вывода в console.log? Не понял как работает return конкретно в этой функции.
