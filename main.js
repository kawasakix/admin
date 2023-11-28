let users = {};

for (let i = 1; i <= 3; i++) {
  let name = prompt("Admin ismini kiriting " + i + ":");
  let age = prompt("Admin yoshini kiriting " + i + ":");
  users[i] = { name, age };
}

for (let key in users) {
  console.log("Admin " + key);
  console.log("Ismi " + users[key].name);
  console.log("Yoshi " + users[key].age);
}

console.log(users);