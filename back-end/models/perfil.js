const Sequelize = require('sequelize');

const Perfil = (sequelize)=>{
    sequelize.define('perfil',{
        nombre: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        calle: {
            type: Sequelize.STRING,
            allowNull: false
        },
        noExterior: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        telefono: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fecha: Sequelize.DATE
    })
}
module.exports = Perfil