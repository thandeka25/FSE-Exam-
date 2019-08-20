
//initiates local server
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(3000);

const fs = require('fs');
var data = fs.readFileSync('my_sneakers.json'); //allows for data to be read first before anything else happens
var sneakercoll = JSON.parse(data); //turn it into js format
console.log(sneakercoll);



  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  };
 let table = document.querySelector("tbody");
 generateTable(table, sneakercoll);

 /** dynamically change content of cards */

//count number of sneakers and display on card
function SneakerCount() {
    var shoeNum = sneakercoll.length;
    document.getElementById("shoeCount").innerHTML =  shoeNum +  " " + "shoes in collection!";
 };
 SneakerCount();
 
 //count number of unique brands and display on card
 function BrandCount() {
    const results_arr = [...new Set(sneakercoll.map(sneakercoll => sneakercoll.Brand))]; //set collects all the unique values. (...) spreads the values in an array. map returns a list of the property values of Brand
    var brandNum = results_arr.length;      //get length of results array to get number of brands
    document.getElementById("brandCount").innerHTML =  brandNum +  " " + "unique brands!";
 ;}
 BrandCount();


 function AddInput() {
    item = {}  //create empty object
    //get object's properties from input
    var brandvalue= document.getElementById('brand').value;
    var stylevalue= document.getElementById('style').value;
    var colorvalue= document.getElementById('color').value;
    var datevalue= document.getElementById('purdate').value;
    var shoepriceval= document.getElementById('shoeprice').value;
  
    
    //add properties to object
    item.Brand = brandvalue;
    item.Style = stylevalue;
    item.Color = colorvalue;
    item.Date = datevalue
    item.Price = shoepriceval;
  
  
    //push object into array
    sneakercoll.push(item);
    var sneakercoll = JSON.stringify(sneakercoll) //turn it into json format
    fs.writeFile(my_sneakers.json, sneakercoll, finished);
      function finished(err){
        console.log('all set')
      }
    console.log(sneakercoll)
    return false  
  };