// Dynamic Dataypes

// console.log('JS INTRO');

var x; // declaration

x = "Rajat"; // definition, initialization
console.log(typeof(x));

x = 10
console.log(typeof(x));

x = true
console.log(typeof(x));

x = 10.5
console.log(typeof(x));


console.log(typeof(0));

console.log(typeof(false)); // boolean

console.log(typeof('false')); // string

console.log(typeof(False)); // undefined

console.log(typeof('0'));

console.log(typeof("0"));

console.log(typeof(null));

console.log(typeof(undefined));

//==================================
var person = {name: "Bagesh", lastname: "Dubey"};
console.log(typeof(person));

var array = [1, 2, 5]
console.log(typeof(array));

var add = function(a, b) {
  return a+b
}

function add2(a, b) {
  return a+b
}

console.log(typeof(add));
console.log(typeof(add2));
 
/*
  PRIMITIVE
  number => 0, 5, 7.8, .....
  boolean => true / false
  string => '0', "0", "kfhdfiin"
  undefined => undefined, all undeclared identifiers 

  REFERENCE
  object => null, {}
*/