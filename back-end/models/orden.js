const Sequelize = require('sequelize');

const Orden = (sequelize)=>{
    sequelize.define('orden',{
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cantidad: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        monto: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        precioIndiv: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
}
module.exports = Orden
