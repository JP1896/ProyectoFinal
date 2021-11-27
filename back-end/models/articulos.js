const Sequelize = require('sequelize');

const Articulos = (sequelize)=>{
    sequelize.define('articulos',{
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        monto: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
}
module.exports = Articulos