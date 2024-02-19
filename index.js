const express = require("express");
const app = express()
const config = require('./config')

config.authenticate()
.then(function(){
    console.log("database is connected")
})
.catch(function(){
    console.log("there is no connection")
})






app.listen(3000, function(){
    console.log('server is running on port 3000...')
})