function AddInput() {
    item = {}  //create empty object
    //get object's properties from input
    brandvalue= document.getElementById('brand').value;
    stylevalue= document.getElementById('style').value;
    colorvalue= document.getElementById('color').value;
    datevalue= document.getElementById('purdate').value;
    shoepriceval= document.getElementById('shoeprice').value;

    
    //add properties to object
    item.Brand = brandvalue;
    item.Style = stylevalue;
    item.Color = colorvalue;
    item.Date = datevalue
    item.Price = shoepriceval;


    //push object into array
    sneakers.push(item);  
  };

  AddInput()