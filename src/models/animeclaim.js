const sq = require('../../config/sq');
const { DataTypes } = require('sequelize');

const curency = sq.define('waifuclaim', {
    id: {
        type : DataTypes.STRING,
        primaryKey : true
    },
    user  : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    malid : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    characterName : {
        type : DataTypes.STRING,
        allowNull : false,
    }

}, {
    paranoid : true
})