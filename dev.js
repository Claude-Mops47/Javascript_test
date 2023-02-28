const emp = { name: "Claude" };

Object.seal(emp);

try {
  Object.defineProperty(emp, "bonus", { value: 3500 });
} catch {
  console.log("can not define new property");
}

//emp.name = "Emmanuel Mopeno";

console.log(Object.isSealed(emp));

console.log(delete emp.name);
console.log(emp);
