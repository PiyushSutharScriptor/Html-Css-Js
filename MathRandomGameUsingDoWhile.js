const prompt = require("prompt-sync")();

// Returns a random integer from 0 to 99:
let value = Math.floor(Math.random() * 100);

// let a = prompt("enter the number : ")
let a;
let c=0;
do{
    a = prompt("enter the correct answer : ");
    if (a>value)
    {
        console.log("value is greater")
    }
    else
    {
        console.log("value is smaller")
    }
    c++;
}while(a!=value);
console.log("Congrats you entered correct value that is : " + a)
console.log("The Number of attempts are : " + c);