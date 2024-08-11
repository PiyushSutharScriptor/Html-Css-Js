// ====>Using for loop : 

// const prompt =require ("prompt-sync")();
// let num = parseInt(prompt("Enter number : "));
// var fact=1;
// for (let i=1 ; i<=num ; i++){
    //     fact = fact * i;
    //     // i++/
    // }
    // console.log("factorial : " , fact);
    
    
// ====>Using reduce : 

let a = [6,5,4,3,2,1];
const fact = ((a,b)=>{
    return a*b;
})

console.log(a.reduce(fact));