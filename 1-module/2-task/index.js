function print(text) {
  console.log(text);
}

let userName;
let userNameLenght;

function isValid(userName) {
  userNameLenght = userName.length;
  if (userNameLenght < 4) {
    return false;
  } else if (userName.includes(' ')) {
    return false;
  } else if (userName == null) {
    return false;
  } else {
    return true;
  }
}

function sayHello() {
  userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();
