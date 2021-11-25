const express = require('express')
const { request } = require('http')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'public')))

app.get('/shoppingSpree',(request,response)=>{
    response.sendFile(path.join(__dirname,'views','index.html'))
})

app.listen(8083,()=>{
    console.log('"Servidor online en puerto 8083"')
})
