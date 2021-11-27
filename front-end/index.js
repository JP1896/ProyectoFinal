// bibliotecas
const express = require('express')
const path = require('path')

const shopRoutes = require('./routes/inicio') // Importar rutas
const app = express() // Crear aplicaion web

// middleware
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/shoppingSpree",shopRoutes) // se vincula la aplicación

// pagina inicio
app.get('/shoppingSpree',(request,response)=>{
    response.sendFile(path.join(__dirname,'views','index.html'))
})

app.listen(8084,()=>{
    console.log("Servidor online en puerto 8084")
})