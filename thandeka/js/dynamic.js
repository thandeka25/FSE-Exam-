//sneakercoll = console.log(require('app.js'));
const fs = require('fs');
var data = fs.readFileSync('my_sneakers.json'); //allows for data to be read first before anything else happens
var sneakercoll = JSON.parse(data); //turn it into js format
console.log(sneakercoll); 