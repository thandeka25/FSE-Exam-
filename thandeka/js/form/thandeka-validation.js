var PriceCheck = function(){
    var price = document.forms["register_form"]["shoeprice"];
    if (isFinite(price))                        
    { 
        window.alert("Please enter the price"); 
        price.focus(); 
        return false; 
    } 

}