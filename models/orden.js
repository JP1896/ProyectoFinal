const Sequelize = require('sequelize');
const Orden = (sequelize)=>{
    sequelize.define('Orden',{
        id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        nombre: Sequelize.STRING,
        mail: Sequelize.STRING,
        address: Sequelize.STRING
    })
}
module.exports = Orden
