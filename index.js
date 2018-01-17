//LEVEL 1

function add(varA, varB) {
  return varA + varB;
}

function substract(varA, varB) {
  return varA - varB;
}

function multiply(varA, varB) {
  return varA * varB;
}

function divide(varA, varB) {
  return varA / varB;
}

function modulo(varA, varB) {
  return varA % varB;
}

//LEVEL 2
var varC = add(10, 5)
console.log(varC);
var varC = substract(8, 5)
console.log(varC);
var varC = multiply(6, 4)
console.log(varC);
var varC = divide(12, 3)
console.log(varC);
var varC = modulo(9, 2)
console.log(varC);

//LEVEL 3
var varC = modulo(substract(add(25, 5), 5), 7)
console.log(varC);