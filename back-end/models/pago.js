const Sequelize = require('sequelize');

const Pago = (sequelize)=>{
    sequelize.define('pago',{
        numero: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
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