const Sequelize = require('sequelize');

const Perfil = (sequelize)=>{
    sequelize.define('perfil',{
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
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