const axios = require('axios');

console.log('a');

setTimeout(function() {
    console.log('aa1')
},1000);

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(function(res){
    console.log('api call')
});

setTimeout(function() {
    console.log('aa2')
},0);

console.log('start');

console.log('end');