function isEven(number) {
  return number % 2 == 0;
}
const myNumber = 23;
const isMyNumberEven = isEven(myNumber);
// console.log(isEven);
console.log(isMyNumberEven);

const person = {
  id: "1",
  name: "mopeno",
  pass: "Winds",
  role: "Admin",
  pole: "nord",
};
const personToJson = JSON.stringify(person);
console.log(personToJson);


function firtFunction(a,b, callback){

console.log(`Sum is ${a+b}`);
callback();
}

function secondFunction(){
console.log('I am callback function');
}

firtFunction(3,6, secondFunction)


