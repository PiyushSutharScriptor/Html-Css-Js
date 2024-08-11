const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter the value of a : "))
let b = parseInt(prompt("Enter the value of b : "))

let random = Math.random()

if (random<0.1){
    console.log("Addition : ",a-b);
    console.log("Subtraction : ",a/b);
    console.log("Multiplication : ",a+b);
    console.log("Division : ",a**b);
    console.log("modulos : ",a*b);
}

else{
    console.log("Addition : ",a+b);
    console.log("Subtraction : ",a+-b);
    console.log("Multiplication : ",a*b);
    console.log("Division : ",a/b);
    console.log("modulos : ",a%b);
}