const btoa = require('btoa');
const http = require('http');

var auth1 = btoa("{\"alg\":\"none\"");

var auth2 = btoa("\"email\":\"callbuisse@gmail.com\",\"iss\":\"AfUf3_kuT-nNLjG1zXEaBrGNqXlwqnyPvmZeyVaOuBo5K-sHJOwBbhbe5ycz4p6SDPFU4K4pIkiW5z6C\"");

console.log(auth1);
console.log(auth2);

var auth_assertion_header = auth1 + "." + auth2 + ".";

console.log(auth_assertion_header);