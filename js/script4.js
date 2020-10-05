// for (var i = 100, count = 0; i >= -100, count < 15; i=i-10, count++) {
//   if(i === 0)
//     continue;
//   console.log(i);
// }

// console.log("Finished for block")


// var x = 0;
// while (x < 10) {
//   console.log(x);
//   x++;
// }

var array = [56, 67, 32]
for (var i of array) {
  console.log(i)
}

var person = {name: "Kushal", surname: "Jain", city: "Delhi"}
for (var i in person) {
  console.log(person[i])
}