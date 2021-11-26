const Sequelize = require('sequelize');

const Pago = (sequelize)=>{
    sequelize.define('pago',{
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        numero: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fechaExp: {
            type: Sequelize.STRING,
            allowNull: false
        },
        codigo: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
}
module.exports = Pago