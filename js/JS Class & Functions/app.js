// Every function made in JavaScript can be used as a class
// Before making any function you should make up your mind, how you are going to use the func.
// ES5
var a = 5;

function sumImPure(b) {
    return a+b;
}
function sumPure(a,b) {
    var self = this;
    // return a+b;
    function sum() {
        return a+b;
    }

    self.sum = sum();
    console.log(self);
    return sum()
}


sumPure.prototype.someprop = "abc";
sumPure.prototype.substract = function (a,b) {
    return a-b;
};

var resultFunction = sumPure(1,2);
var resultClass = new sumPure(1,2);
console.log('resultFunction', resultFunction);
console.log('resultClass sum', resultClass.sum);
console.log('resultClass someprop', resultClass.someprop);
console.log('resultClass substract', resultClass.substract(5,6));