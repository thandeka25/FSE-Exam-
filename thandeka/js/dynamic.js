const fs = require('fs');
var data = fs.readFileSync('my_sneakers.json'); //allows for data to be read first before anything else happens
var sneakercoll = JSON.parse(file);
console.log(sneakers)


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

  console.log(sneakercoll)
  return false  
};
