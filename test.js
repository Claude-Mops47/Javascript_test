let request = new XMLHttpRequest();
request.open("GET", "Test.json", true);
//request.send();

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    let myData = JSON.parse(this.responseText);
    for (let i = 0; i < myData.length; i++) {
      console.log(myData[i]);
    }
    for (let n in myData) {
      console.log(`n => ${n}`);
    }
  }
};

//
const user1 = {
  id: 100,
  name: "Howard Moon",
  password: "Password!",
};
const removeProperty =
  (prop) =>
  ({ [prop]: _, ...rest }) =>
    rest;

const removePassword = removeProperty("password");
const removeId = removeProperty("id");

removePassword(user1);
removeId(user1);
console.log(user1);

//
class User {
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}
class Admin extends User {
  #poste;
  constructor(id, username, eSalary, permissions) {
    super(id, username, eSalary);
    this.#poste = permissions;
  }
}

let userOne = new User(10, "boss", 9000);
let AdminOne = new Admin(01, "mops", 18000, "Admin");

console.log(userOne, userOne.getSalary() * 0.3);
console.log(AdminOne, AdminOne.getSalary() * 0.3);

//
const value = [3, 7, 5, 5, 5, 8, 1, 8, 0, 6, 3];
const unique = [...new Set(value)];
console.log(unique);

//
for (let pas = 0; pas <= 1; pas++) {
  console.log("Faire " + pas + " pas vers l'est");
}

//
class employee {
  use;
  constructor(user, name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.use = user;
  }
}
class Poste extends employee {
  e;
  constructor(name, email, phone, poste, salary) {
    super(name, email, phone);
    this.poste = poste;
    this.e = salary;
  }
  getUser() {
    return parseInt(this.e);
  }
}

let X1 = new employee("Admin", "mops", "mopenobia@gmail.com", 067437372);
let X2 = new Poste("Etude", "Claude", "mopeno@gmail.com", "infos", 1200);
console.log(X1);
console.log(X2);

// const name = employee.name;
// const email = employee.email;
// const phone = employee.phone;
// const {name, email, phone} = employee;

// const year = document.querySelector("#current-year");
// year.innerHTML = new Date().getFullYear();

// const today = new Date();
// showTime = [
//   today.getDate(),
//   today.getDay(),
//   today.getMonth(),
//   today.getFullYear(),
//   today.getYear(),
//   today.getHours(),
//   today.getMinutes(),
//   today.getSeconds(),
//   today.getMilliseconds(),
//   today.getTime(),
//   today.getTimezoneOffset(),
// ];
// showTime.forEach((t) => {
//   console.log(t);
// });

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `The name of the animal is ${this.name} and age is ${this.age}`;
  }
}
const firstAnimal = new Animal("Rex", 2);
console.log(firstAnimal);
console.log(firstAnimal.getInfo());

const secondAnimal = new Animal("Barney", 5);
console.log(secondAnimal);
console.log(secondAnimal.getInfo());

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  bark() {
    return "woof";
  }
}
class Cat extends Animal {
  constructor(name, age, weight) {
    super(name, age);
    this.weight = weight;
  }
}

const myDog = new Dog("Rex", 2, "German Shepard");
console.log(myDog.getInfo());
console.log(myDog.breed);
console.log(myDog.bark());

const myCat = new Cat("Whiskers", 5, "5kg");
console.log(myCat.getInfo());
console.log(myCat.weight);

//
const skills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "JAVA",
  "JEE",
  "PYTHON",
  "PHP",
];

// Stop coding like this
// for (let i = 0; i < skills.length; i++) {
//   console.log(skills[i]);
// }
// Do this instead
// for (let skill of skills) {
//   console.table(skill);
// }
// Or this
skills.forEach((skill) => {
  console.log(skill.length, skill);
});

const objects = [
  { name: "mop", val: 460, test: "lorem" },
  { name: "white", val: 675, test: "lope" },
  { name: "black", val: 980, test: "lome" },
  { name: "pink", val: 4550, test: "pome" },
];
console.table(objects);

// ss
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 5];

// merge two arrays
let arr = arr1.concat(arr2);
let uniqueArr = [];

// loop through array
for (let i of arr) {
  if (uniqueArr.indexOf(i) === -1) {
    uniqueArr.push(i);
  }
}
console.log(uniqueArr);

//
const displayStatus = (name) => `Hello ${name}`;
const users = ["Mopeno", " Wasky"];

function addUser(user) {
  users.push(user);
  return users;
}
let Mo = displayStatus(addUser(" Claude, " + "Clement"));
console.log(Mo);

function greet() {
  console.log("Hello world");
}

// setTimeout(greet, 3000);
// console.log('This message is show first');
let intervalId = setTimeout(greet, 3000);
console.log("Id: " + intervalId);

//
// window.location.reload();

// setTimeout(() => {
//   documentation.location.reload();
// }, 60000);

// history.go();
// Tableau avec les jours de la semaine

// Table with days of the week
