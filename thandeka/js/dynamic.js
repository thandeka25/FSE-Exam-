//import array into dynamic.js from my_sneakers.js


//file to add functions for javascript



//functions to dynamically populate html table
let data = require('./my_sneakers.json');

var nHTML = document.querySelector('table').innerHTML;
function createTable () {
    data.forEach(function(arrItem){
        var td = '<tr>';
        arrItem.forEach(function(item){
        td += '<td>'+item+'</td>' ;
        });
        nHTML += td + '</tr>';
    });
    document.querySelector('table').innerHTML = nHTML;
}



//functions to chack for form validation



//function to append data  to js file and table from form


//any extra functions