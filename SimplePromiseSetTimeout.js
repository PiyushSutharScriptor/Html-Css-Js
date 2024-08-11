let promise = new Promise((resolve,reject)=>{
    console.log("Start")
    setTimeout(()=>{
        let num=5;
        if(num==5){
            resolve("number is 5");
        }
        else{
            reject("number is not 5");
        }
    },2000)
}).then((message)=>{
    console.log("resolved with " + message);
}).catch((error)=>{
    console.log("rejected with " + error);
})