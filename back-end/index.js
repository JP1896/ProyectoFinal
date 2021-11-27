// bibliotecas
const express = require('express')
const path = require('path')
const cors=require('cors')

const sequelize = require('./utils/database') // cargar el objeto de la DB
const shopRoutes = require('./routes/inicio') // Importar rutas

//Configuración de cors para recibir peticiones desde otros origenes
const app = express() // Crear aplicaion web

// middleware
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/shoppingSpreeBack",shopRoutes) // se vincula la aplicación


sequelize.sync()
    .then(
        app.listen(8085,()=>{
            console.log("Servidor online en puerto 8085")
        })
    )
    .catch(err=>console.log(err))