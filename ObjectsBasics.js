//Basics of Objects : 

const item = {
    "tomato" : true,
    "Piyush" : "name",
    "boolean" : undefined,
    "number" : 654
 }
 //Printing objects key value pairs ; 
console.log(item["tomato"]);
console.log(item["Piyush"]);
console.log(item["boolean"]);
console.log(item["number"]);


//Modifing objects and adding key value pairs : 
const a = {
    Rohan : true,
    num : 454
}
console.log(a);
//Changing Values : 
a["Rohan"] = false;
console.log(a);
//Adding key value pairs : 
a["price"] = "VeryHigh";
console.log(a);