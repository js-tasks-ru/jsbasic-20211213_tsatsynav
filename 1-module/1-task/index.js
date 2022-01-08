function factorial(n) {
  let result;

  for (result = 1; n > 1; n--) {
    result *= n;
  }
  return result;
}

factorial(0);
factorial(1);
factorial(3);
factorial(5);
