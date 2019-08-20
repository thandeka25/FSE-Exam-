(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var sneakers = [
    {
       "Brand": "Nike",
       "Style": "Cortez",
       "Color": "White",
       "Date": "2019-01-30",
       "Price": 1500
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 97",
       "Color": "Red",
       "Date": "2018-04-02",
       "Price": 1700
    },
    {
       "Brand": "Adidas",
       "Style": "Ultra Boost",
       "Color": "Black",
       "Date": "2018-06-18",
       "Price": 1800
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 90",
       "Color": "Blue",
       "Date": "2019-02-03",
       "Price": 1500
    },
    {
       "Brand": "Adidas",
       "Style": "Stan Smith",
       "Color": "White",
       "Date": "2018-02-15",
       "Price": 1500
    },
    {
       "Brand": "Adidas",
       "Style": "Ultra Boost",
       "Color": "Silver",
       "Date": "2018-05-01",
       "Price": 1800
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 90",
       "Color": "White / Red",
       "Date": "2018-07-22",
       "Price": 1700
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 90",
       "Color": "Navy",
       "Date": "2018-01-31",
       "Price": 1500
    },
    {
       "Brand": "New Balance",
       "Style": "997 Classic",
       "Color": "Blue",
       "Date": "2018-12-23",
       "Price": 1100
    },
    {
       "Brand": "Puma",
       "Style": "Suede Classic",
       "Color": "Silver",
       "Date": "2018-11-01",
       "Price": 1300
    },
    {
       "Brand": "Nike",
       "Style": "Air Vapormax",
       "Color": "Black",
       "Date": "2019-03-29",
       "Price": 3000
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 95",
       "Color": "Neon",
       "Date": "2018-02-15",
       "Price": 1500
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 97",
       "Color": "Silver",
       "Date": "2018-10-22",
       "Price": 1800
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 90",
       "Color": "White / Red",
       "Date": "2018-07-22",
       "Price": 1700
    },
    {
       "Brand": "Nike",
       "Style": "Air Force 1",
       "Color": "Navy",
       "Date": "2019-02-14",
       "Price": 1500
    },
    {
       "Brand": "Adidas",
       "Style": "Gazelle",
       "Color": "Blue",
       "Date": "2018-01-01",
       "Price": 1300
    },
    {
       "Brand": "Nike",
       "Style": "Air Presto",
       "Color": "Black",
       "Date": "2018-04-28",
       "Price": 1300
    }
];


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//dynamically add content to table from array
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
generateTable(table, sneakers);

/** dynamically change content of cards */

//count number of sneakers and display on card
function SneakerCount() {
   var shoeNum = sneakers.length;
   document.getElementById("shoeCount").innerHTML =  shoeNum +  " " + "shoes in collection!";
};
SneakerCount();

//count number of unique brands and display on card
function BrandCount() {
   const results_arr = [...new Set(sneakers.map(sneakers => sneakers.Brand))]; //set collects all the unique values. (...) spreads the values in an array. map returns a list of the property values of Brand
   var brandNum = results_arr.length;      //get length of results array to get number of brands
   document.getElementById("brandCount").innerHTML =  brandNum +  " " + "unique brands!";
;}
BrandCount();

//count the current total value of collection
/** function GetValue(){
   //create a function to extract all the prices
   function price(item){
      return item.Price;
   }
    //create a summing function
   function sum(prev, next){
      return prev + next;
   }
   // extract the prices from map and sum them all up
   totWorth = sneakers.map(price).reduce(sum);
   document.getElementById("priceCount").innerHTML = "ZAR" + totWorth +  " " + "invested so far!";
};
GetValue() */

//Dynamically append new information to array
function AddInput() {
   item = {};  //create empty object
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
   item.Date = datevalue;
   item.Price = shoepriceval;


   //push object into array
   sneakers.push(item);
   console.log(sneakers);
   //return false  
 };
 AddInput()
},{}]},{},[1]);
