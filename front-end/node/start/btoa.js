var btoa = require('btoa');
var auth_1 = btoa("{\"alg\":\"none\"}");
var auth_2 = btoa("{\"email\":callbuisse@gmail.com,\"iss\":AZ6OsG3kJ9g3kWtVJcm7ZU5H570_t8_-yqJzhRmPY-t38Gcz_ntAx5MrfgpVU0foEDCRczj9ggQ_q4dz}");
var auth_assertion_header = auth_1 + "." + auth_2 + ".";

console.log(auth_assertion_header);