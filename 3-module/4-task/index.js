function showSalary(users, age) {
  let str = '';
  users.forEach(function(item) {
    if (item.age <= age) {
      str = str + item.name + ", " + item.balance + "\n";
    }
  });
  return str.slice(0, -1);
}
