// Objeto de conexion
const Sequelize = require('sequelize');

// p1= Nombre de la DB CREATE DATABASE== base2, p2= user, p3= password== root
const sequelize = new Sequelize('user5DB','user5','root',{
    dialect: 'mysql', //port: 3306,
    host: '54.198.161.35',
    define: {
        timestamps: false,      // Evitar createdAt y updateAt
        freezeTableName: true   // Evitar plural
    }
})

// Carga de las definiciones de los modelos
const modelDefiners = [
    // Modelos definidos dentro de la carpeta models
    require('../models/orden'),
    require('../models/perfil'),
    require('../models/pago')
]

// Adherir los modelos al objeto de conexion 
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

module.exports = sequelize