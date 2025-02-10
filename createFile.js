const fs = require('fs');
fs.rename('main.txt','mymain.txt',(err)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("renamed successfully")
    }
})