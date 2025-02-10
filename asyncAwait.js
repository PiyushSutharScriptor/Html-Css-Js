console.log("first")
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("second")
    })
})

const myfun = async function(){
    let res = await promise;
    console.log(res);
}

console.log("third")

myfun();