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
}

function getPostsWithAjax () {
    var url = 'https://jsonplaceholder.typicode.com/todos';
    $.ajax({
        type: 'GET',
        url,
        dataType:'json',
        data:{hello:'hello'},
        success: function (resp) {
            console.log(resp[0]);
        },
        error: function (error) {
            console.log(error);
        }
    });
}
