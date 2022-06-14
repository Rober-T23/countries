const {DataTypes } = require('sequelize')

module.exports =(sequelize)=>{
    sequelize.define('tourist', {
        id:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false

        },
        dificultad:{
            type: DataTypes.STRING,
            allowNull: false
        },
        duración:{
            type: DataTypes.FLOAT,
            allowNull: true
        },
        temporada:{
            type:    DataTypes.ENUM ('Verano', 'Otoño', 'Invierno', 'Primavera')
        }
    })
}
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)