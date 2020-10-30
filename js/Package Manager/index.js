// ES5 Way of using a package

var lodash = require('lodash');

var movies = [ 'm1', 'm2', 'm3'];
// var movies = null;

console.log('Hello NPM 1');
lodash.forEach(movies, function(movie){
    console.log(movie)
});
console.log('Hello NPM 2');
if(movies !== null) {
    movies.forEach(function(m,i){
        console.log(i,m)
    });
}
console.log('Hello NPM 3');