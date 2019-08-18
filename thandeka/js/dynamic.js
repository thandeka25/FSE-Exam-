//import array into dynamic.js from my_sneakers.js
//import { data } from './my_sneakers';
var data = require('./my_sneakers')
//file to add functions for javascript

/**function numShoes (){
    var countShoes = data.length;
    document.getElementById("shoeCount").innerHTML =  countShoes + "shoes in collection!";
}; */

function changeText() {
    document.getElementById("shoeCount").innerHTML =  "25 shoes in collection!";
};

changeText()


//functions to check for form validation



//function to append data  to js file and table from form


//any extra functions