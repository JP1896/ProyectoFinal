const Sequelize = require("sequelize")

const sequelize = new Sequelize('base2','user1','root',{
    dialect: 'mysql', //3306 port
    host: '3.94.165.232',
    define:{
        //Evitar que nos ponga createdAt y updateAt
        timestamps: false,
        //Evitar plural
        freezeTableName : true
    }    
})

const modelDefiners =[
    require('../models/orden')
]

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

module.exports = sequelize
