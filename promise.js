console.log("first")
const promise = new Promise((resolve,reject)=>{
    let status = true;
    setTimeout(()=>{
        console.log("second")
    },2000)
    if(status){
        resolve("Success")
    }
    else{
        reject("failure")
    }
    
})

promise.then((message)=>{
    console.log(message)
})
promise.catch((err)=>{
    console.log(err)
})
console.log("third")