const fs = require('fs');
fs.writeFile('main.txt' , "Hello piyush" , (err)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("created successfully")
    }
})