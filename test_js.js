// Table with days of the week?
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tbl = document.getElementById("calendar-body"); // body of the calendar

  // clearing all previous cells
  tbl.innerHTML = "";

  // filing data about month and in the page via DOM.
  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  // creating all cells
  let date = 1;
  for (let i = 0; i < 6; i++) {
    // creates a table row
    let row = document.createElement("tr");

    //creating individual cells, filing them up with data.
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(date);
        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          cell.classList.add("bg-info");
        } // color today's date
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }
    }

    tbl.appendChild(row); // appending each row into calendar body.
  }
}

// password generator?
function generatePassword() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

let pass = generatePassword();
console.log(pass);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("even numbers are");
for (var i = 1; i < 10; i += 2) {
  console.log(i);
}

console.log("odd numbers are");
for (var i = 2; i < 10; i += 2) {
  console.log(i);
}

// let a = "hey";
// let b = { name: "john" };
// person = `${a} ${b.name}`;

// console.log(person);

// function func(a, b) {
//   a = "hello";
//   b.name = "me";
// }

// func();

//! JavaScript Arrays Destructuring

//* Assigning array items to variables
const [a, b, c] = [123, "second", true];
console.log(a, b, c);

//* Skipping items
const [, d] = [123, "second", true];
console.log(d);

//* Assigning the first values, string the rest together
const [e, f, ...rest] = [123, "second", true, false, 42];
console.log(rest, e, f);

//* Swapping variables
let x = true;
let y = false;
[x, y] = [y, x];
console.log(x, y);

//! JavaScript String Methods Cheat Sheet

//* charAt()
var txt = "Hello world";
console.log(txt.charAt(0));

//* concat()
var str1 = "Hello ";
var str2 = "codingtute!";
console.log(str1.concat(str2));

//* indexOf()
var txt = "Lets find where 'pen' occurs!";
console.log(txt.indexOf("pen"));

//* lastIndexOf()
var str = "A dev knows a dev";
var pos = str.lastIndexOf("dev");
console.log(pos);

//* replace()
var str = "Hello Dev!";
console.log(str.replace("Dev", "world"));

//* search()
var str = "Hello dev!";
console.log(str.search("dev"));

//* slice(start, end)
var str = "Developers world!";
console.log(str.slice(0, 10));

//* substr(start, length)
var s = "JavaScript";
console.log(s.substr(4, 6));

//* substring(start, end)
var str = "Hello dev!";
console.log(str.substring(1, 4));

//* toUpperCase()
var sentence = "CodingTute";
console.log(sentence.toUpperCase());

//* valueOf()
// const s = new String("test");
// typeof s;
// s.valueOf();
// typeof s.valueOf();

//* trim()
var str = " Trim Both Side  ";
console.log(str.trim());

//* toString()
var number = 15;
console.log(number.toString());

//* includes()
var str = "My name is codingtute.";
console.log(str.includes("name"));

//* charCodeAt()
var str = "TEST";
console.log(str.charCodeAt(0));

//* match()
var str = "lopersum lopersum  lopersum lopersum";
console.log(str.match(/sum/g));

//* split()
var str = "1,2,3,4,5";
console.log(str.split(","));

//* toLowerCase()
var sentence = "CodingTute";
console.log(sentence.toLowerCase());
