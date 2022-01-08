function truncate(str, maxlength) {
  if (str.length > maxlength) { //
    return str.substr(0, maxlength - 1) + '...';
  } else {
    return str;
  }
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
truncate('Всем привет!', 20);

// TODO: почему с условным '?' оператором скрипт работает, а в стандартном написании нет?

/* function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.substr(0, maxlength - 1) + '…' : str;
}*/
