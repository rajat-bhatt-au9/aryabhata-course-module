var xhr = '';
function fetchPosts () {
    if(xhr) xhr.abort();
    var url = 'https://jsonplaceholder.typicode.com/todos';
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      console.log('onreadystatechange', xhr.readyState)
      if(xhr.readyState === 4) {
        var response = JSON.parse(xhr.response)
        console.log(typeof xhr.response);
        console.log(typeof response);
      }
    }
    xhr.open('GET',url);
    xhr.send();
    console.dir(xhr);
}

