const express = require('express')
const app = express();
app.use(express.json())

app.get('/' , (req,res)=>{
    res.send("get request")
})
app.post('/name' , (req,res)=>{
    res.send("post request")
})
app.put('/name/:id' , (req,res)=>{
    res.send("put requesst")
})
app.delete('name/:id' , (req,res)=>{
    res.send("delete request")
})

app.listen(3000 , ()=> console.log("Server running"))
