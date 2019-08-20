

function getInput(){
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
}


function addRow(table, data) {
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
generateTable(table, formInput);
