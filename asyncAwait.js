const express = require('express')
const app = expressss()
app.use(express.json())

app.route('/')
.get('/' ,(req,res)=>res.send('hellow'))
.post('/home' , (req,res)=>res.send('post'))
.put('/home/:id , (req,res)=>res.send('put'))