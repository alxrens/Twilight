const sq = require('../../config/sq');
const { DataTypes } = require('sequelize');

const card = sq.define('waifuclaim', {
    id: {
        type : DataTypes.STRING,
        primaryKey : true
    },
    user  : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    chid : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    character_name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    anime_name : {
        type : DataTypes.STRING,
        allowNull : false,
    }

}, {
    paranoid : true
})

module.exports = card