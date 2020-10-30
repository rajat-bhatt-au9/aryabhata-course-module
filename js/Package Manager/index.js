// ES5 Way of using a package

var lodash = require('lodash');

var movies = [ 'm1', 'm2', 'm3'];
// var movies = null;

console.log('Hello NPM 1');

function foreachCallback(item, index) {
    console.log(item, index);
}

lodash.forEach(movies, foreachCallback);

console.log('Hello NPM 2');
if(movies !== null) {
    movies.forEach(foreachCallback);
}
console.log('Hello NPM 3');