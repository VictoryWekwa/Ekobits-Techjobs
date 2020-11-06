
var fs = require('fs');
var request = require('request');
request.post({
    url : 'https://icanhazdadjoke.com/api',
    formData : {
        file:fs.creatReadStream('jokes.txt')
    },
}, function(error,response,joke){
    console.log(joke);

});