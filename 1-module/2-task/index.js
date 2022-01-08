'use strict';

function print(text) {
  console.log(text);
}

function isValid(name) {
  if (name.includes(' ')) {
    return false;
  } else if (name.length < 4) {
    return false;
  } else if (name == null) {
    return false;
  } else {
    return true;
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();

// TODO: прошу разъяснить порядок написания функции согласно условию реагирования на null.
