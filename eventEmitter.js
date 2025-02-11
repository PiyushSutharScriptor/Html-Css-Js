const eventEmitter = require('events')
const emitter = new eventEmitter()

emitter.on('message' , (msg)=>{
    console.log("message received : " , msg)
})

emitter.emit("message" , "Basic code for eventEmitter")